import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent} from './common/register/register.component';
import { ProfileComponent} from './profile/profile.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {PageComponent} from './layout-editor/page/page.component';
import {WebsiteListComponent} from './website-list/website-list.component';
import {PageListComponent} from './page-list/page-list.component';
import {PageEditorComponent} from './page-editor/page-editor.component';
// import {WidgetEditorComponent} from './widget-editor/widget-editor.component';

const appRoutes: Routes = [
  { path: 'layout', component: PageComponent },
  // { path: 'layout/edit/widget/:wid', component: WidgetEditorComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'websites', component: WebsiteListComponent},
  { path: 'websites/:websiteId/pages', component: PageListComponent},
  { path: 'websites/:websiteId/pages/:pageId', component: PageEditorComponent}
];
export const routing =
  RouterModule.forRoot(appRoutes);
