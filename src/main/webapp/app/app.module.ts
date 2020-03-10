import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HipstermusicSharedModule } from 'app/shared/shared.module';
import { HipstermusicCoreModule } from 'app/core/core.module';
import { HipstermusicAppRoutingModule } from './app-routing.module';
import { HipstermusicHomeModule } from './home/home.module';
import { HipstermusicEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HipstermusicSharedModule,
    HipstermusicCoreModule,
    HipstermusicHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HipstermusicEntityModule,
    HipstermusicAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class HipstermusicAppModule {}
