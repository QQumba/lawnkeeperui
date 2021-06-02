import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {LawnsComponent} from './lawns/lawns.component';
import {LawnInfoComponent} from './lawn-info/lawn-info.component';
import {AccountComponent} from './account/account.component';
import {NotificationComponent} from './notification/notification.component';
import {AuthGuardService} from './auth-guard.service';
import {ScheduleComponent} from './schedule/schedule.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'lawns', component: LawnsComponent, canActivate: [AuthGuardService]},
  {path: 'lawn', component: LawnInfoComponent, canActivate: [AuthGuardService]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
  {path: 'notifications', component: NotificationComponent, canActivate: [AuthGuardService]},
];
