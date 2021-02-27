import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralOptionService } from './data/service/general-option.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-skeleton';
  private iconList: Array<{ name: string, src: string }>;

  constructor(
    private serviceicons: GeneralOptionService,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.iconList = this.serviceicons.getIcons();
  }
  ngOnInit(): void {
    this.createIconList();
    console.log(this.iconList);
    
  }
  createIconList() {
    const baseName = 'icon_vnpt_';
    const baseSrc = 'assets/icons/';
    const baseType = '.svg';
    this.iconList.forEach(icon =>
      this.matIconRegistry.addSvgIcon(baseName + icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(baseSrc + icon.src + baseType)));

  }
}

