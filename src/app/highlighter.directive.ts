import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appHighlight]'
})
export class HighlighterDirective{
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'
  @HostBinding('style.color') color:string = 'white'
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor='yellow';
    this.color='black'
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor='transparent';
    this.color='white'
  }
}