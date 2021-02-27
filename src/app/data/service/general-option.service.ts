import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralOptionService {
  private iconList: Array<{name: string, src: string}>;

constructor() { }
getIcons() {
  this.iconList = [
    { name: 'assignment', src: 'assignment' },
    { name: 'phone', src: 'phone' },
    { name: 'email', src: 'email' },
    { name: 'person', src: 'person' },
    { name: 'home', src: 'home' },
    { name: 'card', src: 'card' },
    

  ];
  return this.iconList;
}

}
