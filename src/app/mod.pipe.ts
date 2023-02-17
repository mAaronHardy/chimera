import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "mod"
})
export class ModPipe implements PipeTransform {
    transform( value: number ) {
        let number = Math.floor((value-10)/2);
        let pos = "";
        number >= 0 ? pos = "+" : "";
        return pos + number;
    }
}