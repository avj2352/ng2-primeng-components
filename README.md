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


- With `HostBinding` you can bind to a particular property of the DOM Element you are sitting on.
- With `HostListener` you can listen to the DOM events you are on.


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
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = 'blue';
  }//end:onMouseEnter

  @HostListener ('mouseleave') onMouseExit(){    
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }//end:onMouseExit

}

```


# Binding to Custom Properties and Native DOM Element Properties

To Bind to Native DOM Element attributes, use the following Decorators

- `@HostListener`
- `@HostBinding`

To Bind to Custom Properties and Event Methods, use the following Decorators

- `@Input`
- `@Output`


# Reason for * in ngIf and ngFor

The reason there is a `*` for `ngIf` and `ngFor`:

```js
<div *ngIf="isBoolean" ></div>
```

the above code can be re-written as follows:

```js
<ng-template [ngif]="isBoolean">
  <div></div>
</ng-template>
```

# Structural Directives

>`NOTE:` Structural Directives, in Angular 4+ are represented as `*myCustomStructural` Directive.

```js
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){
    if(!condition){
        // this will have the reference to the view template of the directive
        this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }//end:endif
  }//end:unless

  constructor(private templateRef:TemplateRef<any>, private  vcRef:ViewContainerRef ) {

   }//end:constructor
}//end:class-unlessDirective
```