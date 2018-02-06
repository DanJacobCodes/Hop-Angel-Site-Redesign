import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeerComponent } from './beer/beer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';




const appRoutes: Routes = [

	{
		path: '',
		component: HomepageComponent
	},

	{
	    path: 'gallery',
	    component: GalleryComponent
	  },


	{
	    path: 'about',
	    component: AboutComponent
	  },

    {
	    path: 'contact',
	    component: ContactComponent
  	},

  	{
  		path: 'menu',
  		component: MenuComponent
  	},

  	{
  		path: 'beer',
  		component: BeerComponent
  	},

  	{
  		path: 'events',
  		component: EventsComponent
  	}


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
