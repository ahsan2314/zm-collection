import { Routes } from '@angular/router';
import { ZmCollectionHomeComponent } from './zm-collection-home/zm-collection-home.component';
import { ArivalComponent } from './arival/arival.component';
import { AbayasComponent } from './abayas/abayas.component';
import { ACCESSORIESComponent } from './accessories/accessories.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'arival', component: ArivalComponent },
    {path: 'abayas',component: AbayasComponent},
    {path:'zmcollectionhome',component:ZmCollectionHomeComponent},
    {path:'accessories',component:ACCESSORIESComponent},
    {path:'contact',component:ContactComponent}
];
