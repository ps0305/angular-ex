import {Component} from "@angular/core";
@Component({
    selector:"first-ex",
    templateUrl:"./first.component.html"
})
export class FirstComponent{
    private data:string;
    constructor(){
        this.data = "Data From DataBase Soon...!";
    }
    public getData():string{
        return this.data;
    }
}