import{ component} from "@angular/core";
@component({
    selector:"first-ex";
    templateurl:"./first.component.html"
})
export class firstComponent{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
}
constructor(){
    this.sub_one="Angular6";
    this.sub_two="NodeJs";
    this.sub_three="MongoDB";
}
public getSubOne():string{
    return.this.sub_one;
}
public getSubTwo():string{
    return.this.sub_two;
}
public getSubThree():string{
    return.this.sub_three;
}
}