import { LandscapingComponent } from './pages/landscaping/landscaping.component';
import { LivestockComponent } from './pages/livestock/livestock.component';
import { CsaComponent } from './pages/csa/csa.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'csa',
		component: CsaComponent
	},
	{
		path: 'livestock',
		component: LivestockComponent
	},
	{
		path: 'landscaping',
		component: LandscapingComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
