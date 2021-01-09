import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-admin-layout-nav',
  templateUrl: './admin-layout-nav.component.html',
  styleUrls: ['./admin-layout-nav.component.scss']
})
export class AdminLayoutNavComponent implements OnInit {

  protected keycloakService: KeycloakService;
  isLoggedIn = false;

  constructor(keycloakService: KeycloakService) { 
    this.keycloakService = keycloakService;
  }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then(r => {
      this.isLoggedIn = r;
    });
  }

  login(): void {
    this.keycloakService.login();
  }

  logout(): void {
    this.keycloakService.logout();
  }

}
