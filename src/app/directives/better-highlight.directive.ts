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
