import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.module').then(m => m.FeaturesModule)
  },
  { path: '**', redirectTo: '' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
