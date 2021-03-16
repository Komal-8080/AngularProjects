import { Component } from '@angular/core';
import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl;
  url;
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz.";
    this.imgUrl = "../assets/BridgelabzLogo.png";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event) {
    console.log("Save button is Clicked!!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change Event Occurred", $event.data);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
