import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'contacemanager', loadChildren: () => import('./contacemanager/contacemanager.module').then(m => m.ContacemanagerModule)},
  {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: '**', redirectTo: 'contacemanager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
