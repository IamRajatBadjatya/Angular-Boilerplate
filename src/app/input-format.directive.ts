import { Directive,HostListener,Input,ElementRef} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective{

  constructor(private el: ElementRef) { }
  @Input('appInputFormat') format:string;
  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = (this.format === 'uppercase') ? value.toUpperCase() : value.toLowerCase();
  }

}
