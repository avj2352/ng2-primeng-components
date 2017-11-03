# Angular Directives

> - Angular `Directives` are imported the same way as `Components` in the `app.module.ts` under `declarations`
> - To Create an `Attribute` directive in the selector type 
```js
@Directive({
  selector: '[appBetterHighlight]'
})
```

---

# Basic Angular Directive using ElementRef

```js
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
```

# Better Angular Directive using HostBinding, HostListener and Renderer2

```js
import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    //takes four parameters
    //1 - element
    //2 - stylePpty
    //3 - value
    //4 - !important
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }//end:ngOnInit

  @HostBinding('style.backgroundColor') backgroundColor:string;

  
  @HostListener ('mouseenter') onMouseEnter(){    
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }//end:onMouseEnter

  @HostListener ('mouseleave') onMouseExit(){    
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }//end:onMouseExit

}

```