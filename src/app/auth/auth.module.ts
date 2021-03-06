import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthRoutingModule} from './auth-routing.module';


const firebaseConfig = {
  apiKey: 'AIzaSyB9bGfVUURoYaaNwqt3aOy3MZKQv4q65pA',
  authDomain: 'angular-pro-final-569c4.firebaseapp.com',
  databaseURL: 'https://angular-pro-final-569c4.firebaseio.com',
  projectId: 'angular-pro-final-569c4',
  storageBucket: 'angular-pro-final-569c4.appspot.com',
  messagingSenderId: '1079679755908'
};

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: []
})
export class AuthModule { }
