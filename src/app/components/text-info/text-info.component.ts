import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-text-info',
  templateUrl: './text-info.component.html',
  styleUrls: ['./text-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInfoComponent implements OnInit {
  @Input() titleText = '';
  @Input() paragraphText = '';
  @Input() primaryButtonText = '';
  @Input() strokedButtonText = '';
  @Input() showStrokedButtonIcon = false;
  @Input() primaryButtonColor = 'red';

  primaryButtonstyle: any = {};

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      "play",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/play.svg")
    );
  }

  ngOnInit(): void {
    this.primaryButtonstyle = {
      'color': this.primaryButtonColor,
    };
  }
}
