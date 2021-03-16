import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="";
  url=""

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz.";
    this.imgUrl = "../assets/BridgelabzLogo.png";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event) {
    console.log("Save button is Clicked!!", $event);
    window.open(this.url, "_blank");
  }
}
