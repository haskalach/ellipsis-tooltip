import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-tootltip',
  templateUrl: './tootltip.component.html',
  styleUrls: ['./tootltip.component.css']
})
export class TootltipComponent implements OnInit {

  @ViewChild('item', { read: ElementRef, static: true })
  item?: ElementRef;
  showtooltip = false;
  toolTipText = '';

  @Input() alignCenter = false;;
  @Input() hoverStyle = false;
  @Input() extraStyle = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() { }
  ngAfterViewChecked() {
    this.toolTipText = this.item ? this.item.nativeElement.outerText : '';
    // console.log('tooltipText',this.toolTipText);
    this.checkEllipsis();
    this.cdRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  checkEllipsis(): void {
    if (this.item) {
      if (this.item.nativeElement.offsetWidth < this.item.nativeElement.scrollWidth) {
        this.showtooltip = true;
      } else {
        this.showtooltip = false;
      }
    }

  }
}
