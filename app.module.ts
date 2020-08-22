import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WebrequestService } from './webrequest.service';
import { PurposeService } from './purpose.service';
import { NewlistComponent } from './newlist/newlist.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { EditlistComponent } from './editlist/editlist.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NewlistComponent,
    NewtaskComponent,
    EditlistComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [WebrequestService, PurposeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
