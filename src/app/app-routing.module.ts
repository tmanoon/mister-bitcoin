import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { contactResolver } from './resolvers/contact.resolver';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'statistics', component: StatisticPageComponent },
  {
    path: 'contact', component: ContactPageComponent, children: [
      { path: 'edit', component: ContactEditPageComponent },
      { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: contactResolver } }
    ]
  },
  { path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: contactResolver } },
  { path: 'signup', component: SignupPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: ContactPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
