import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { StartpageComponent } from './components/startpage/startpage.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TaskDialogComponent } from './components/dialogs/task-dialog/task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './components/dialogs/create-task-dialog/create-task-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BacklogInfoDialogComponent } from './components/dialogs/backlog-info-dialog/backlog-info-dialog.component';
import { SearchByIDDialogComponent } from './components/dialogs/search-by-iddialog/search-by-iddialog.component';
import { FormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BacklogComponent,
    StartpageComponent,
    TaskDialogComponent,
    CreateTaskDialogComponent,
    BacklogInfoDialogComponent,
    SearchByIDDialogComponent,
    ErrorDialogComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
