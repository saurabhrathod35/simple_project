import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { UserService } from './services/user.service.client';
import { CourseNavigatorServiceClient } from './services/CourseNavigatorServiceClient';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { PageComponent } from './layout-editor/page/page.component';
import { RowComponent } from './layout-editor/row/row.component';
import { ColumnComponent } from './layout-editor/column/column.component';
import { WidgetComponent } from './layout-editor/widgets/widget/widget.component';
import { HeadingComponent } from './layout-editor/widgets/heading/heading.component';
import { ParagraphComponent } from './layout-editor/widgets/paragraph/paragraph.component';
import { WidgetToolbarComponent } from './layout-editor/widgets/widget-toolbar/widget-toolbar.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import Model from './models/Model';
import { ColumnToolbarComponent } from './column-toolbar/column-toolbar.component';
import LayoutService from './services/LayoutService';
import { WebsiteListComponent } from './website-list/website-list.component';
import WebsiteService from './services/WebsiteService';
import { PageListComponent } from './page-list/page-list.component';
import PageService from './services/PageService';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageRowComponent } from './page-row/page-row.component';
import { PageColumnComponent } from './page-column/page-column.component';
// import { WidgetEditorComponent } from './widget-editor/widget-editor.component';
 import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SecureComponent } from './secure/secure.component';
import { ConfigureWebsiteComponent } from './website-list/configure-website/configure-website.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    PageComponent,
    RowComponent,
    ColumnComponent,
    WidgetComponent,
    HeadingComponent,
    ParagraphComponent,
    WidgetToolbarComponent,
    LessonListComponent,
    ColumnToolbarComponent,
    WebsiteListComponent,
    PageListComponent,
    PageEditorComponent,
    PageRowComponent,
    PageColumnComponent,
    HeaderComponent,
    SecureComponent,
    ConfigureWebsiteComponent,
    // WidgetEditorComponent
  ],
  imports: [
    MaterialModule,
    routing,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],entryComponents:[ConfigureWebsiteComponent],
  providers: [
    { provide: UserService, useClass: UserService },
    { provide: CourseNavigatorServiceClient, useClass: CourseNavigatorServiceClient },
    { provide: WebsiteService, useClass: WebsiteService },
    { provide: PageService, useClass: PageService }
    // Model,
    // LayoutService
    // PageModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
