import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'limengfei'
  password = ''
  errorMessage ='Invalid Credentials'
  invalidLogin = false


  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    //console.log(this.username);
    //if(this.username === 'limengfei' && this.password == 'dummy'){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin= false;
    }else{
      this.invalidLogin= true;
    }
  }

}
