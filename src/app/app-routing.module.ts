import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResoleveserviceResolver } from './resoleveservice.resolver';
import { ResolveservicetwoService } from './resolveservicetwo.service';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    resolve:{
      tok:ResolveservicetwoService,
    
    },
    data:{
      token:"kjhgfcxghj",
      sessionid:"kjhgfghj"
    },
    loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
