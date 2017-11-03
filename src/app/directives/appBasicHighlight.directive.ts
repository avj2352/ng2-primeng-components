import {Directive, ElementRef, OnInit} from '@angular/core';
@Directive({
    selector:'[appBasicHighlight]'
})
export class AppBasicHighlight implements OnInit{
    constructor(private elementRef:ElementRef){
        
    }//end:constructor

    ngOnInit(){
        //NOTE: this is not the best practice - Directly accessing DOM elements
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        
    }
}//end:class-AppBasicHighlight  