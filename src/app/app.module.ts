import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CsaComponent } from './pages/csa/csa.component';
import { LivestockComponent } from './pages/livestock/livestock.component';
import { LandscapingComponent } from './pages/landscaping/landscaping.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    CsaComponent,
    LivestockComponent,
    LandscapingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
