import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-userpage-demo';

  constructor(public authenticatinService: AuthenticationService){

  }
  logout(){
    this.authenticatinService.logout();
  }
}
