import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Store } from '../store';

// feature modules
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

// containers
import { AppComponent } from './app.component';

// components
import { AppHeaderComponent } from './core/components/app-header/app-header.component';
import { AppNavComponent } from './core/components/app-nav/app-nav.component';

// routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
