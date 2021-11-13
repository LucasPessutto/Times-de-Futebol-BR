import { AuthGuard } from './../auth/auth.guard';
import { SaoPauloComponent } from './times/sao-paulo/sao-paulo.component';
import { TimesComponent } from './times/times.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TimesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'saopaulofc',
    component: SaoPauloComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class TimesRoutingModule {}
