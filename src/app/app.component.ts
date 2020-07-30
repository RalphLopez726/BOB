import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglarChallenge';
  myName = 'Ralph Lopez';
  
  onPress (){
    var title = (<HTMLInputElement>document.getElementById('blogTitle')).value;
    console.log(title)
    document.getElementById('titleblog').innerHTML=title;

    var content = (<HTMLInputElement>document.getElementById('content')).value;
    console.log(content)
    document.getElementById('contentBlog').innerHTML=content;
}
}