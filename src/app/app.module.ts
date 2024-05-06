import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-cmp/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { MovesPreviewComponent } from './cmps/moves-preview/moves-preview.component';
import { DayGreetingPipe } from './pipes/day-greeting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactDetailsPageComponent,
    StatisticPageComponent,
    ContactPreviewComponent,
    ChartComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    ContactEditPageComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent,
    MovesPreviewComponent,
    DayGreetingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
