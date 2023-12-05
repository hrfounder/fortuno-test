import { Component, OnInit,NgZone } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet,HttpClientModule,CommonModule,GoogleSigninButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[];
  user:any

  constructor(private http: HttpClient, private authService:SocialAuthService) {
    this.data=[]
    this.user=null
  }

  ngOnInit() {
    this.loadData();
    this.authService.authState.subscribe((user) => {
      this.user = user
      //perform further logics
    });

  }

  loadData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
    });
  }
  signOut(){
    this.authService.signOut()
  }
}