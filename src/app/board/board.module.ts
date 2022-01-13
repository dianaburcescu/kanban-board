import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { TaskDialogComponent } from './board/task-dialog/task-dialog.component';
import { TaskComponent } from './board/task/task.component';

@NgModule({
  declarations: [BoardComponent, TaskComponent, TaskDialogComponent],
  imports: [
    BoardRoutingModule,
    CommonModule,
    // this should be moved
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ]
})
export class BoardModule { }
