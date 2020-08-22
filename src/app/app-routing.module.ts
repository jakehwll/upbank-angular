import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ActivityComponent } from './activity/activity.component';
import { SaversComponent } from './savers/savers.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
  { path: 'activity', component: ActivityComponent, data: { title: 'Activity' } },
  { path: 'savers', component: SaversComponent, data: { title: 'Accounts' } },
  { path: '', redirectTo: '/savers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
