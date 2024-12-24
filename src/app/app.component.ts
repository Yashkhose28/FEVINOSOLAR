import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { SolutionsComponent } from "./solutions/solutions.component";
import { ContactSupportComponent } from "./contact-support/contact-support.component";
import { FooterComponent } from "./footer/footer.component";
import { NetPromoterScoreComponent } from "./net-promoter-score/net-promoter-score.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutUsComponent, SolutionsComponent, ContactSupportComponent, RouterLink, FooterComponent, HomeComponent, NetPromoterScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fevino-solar';
}
