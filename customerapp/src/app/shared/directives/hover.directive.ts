import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.border')
  border:string = "";

  @HostListener('mouseover')
  mouseOver():void {
    const elem = this.el.nativeElement.querySelector('.image');
    this.renderer.setStyle(elem, 'display', 'block');
    this.border = '2px solid red';
  }
 
  @HostListener('mouseout')
  mouseOut():void {
    const elem = this.el.nativeElement.querySelector('.image');
    this.renderer.setStyle(elem, 'display', 'none');
    this.border = 'none';
  }
}
