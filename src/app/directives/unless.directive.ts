import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:string){
    if(condition != 'pramod'){
        // this will have the reference to the view template of the directive
        this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }//end:endif
  }//end:unless

  constructor(private templateRef:TemplateRef<any>, private  vcRef:ViewContainerRef ) {

   }//end:constructor

}
