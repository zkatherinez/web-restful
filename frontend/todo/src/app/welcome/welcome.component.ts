import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component';
//use class from external module, import it

//an object with several attributes
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name =''
  welcomeMessageFromService: string

  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name =this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response =>this.handleSuccessfulResponse(response),
      error => this.handlerErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage")
    //console.log("get welcome message")
  }
  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response =>this.handleSuccessfulResponse(response),
      error => this.handlerErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage")
    //console.log("get welcome message")
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }
  handlerErrorResponse(error){
    this.welcomeMessageFromService = error.error.message
  }

}
export class Class1{

}
