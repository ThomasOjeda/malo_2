import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AddTaskFormComponent,
    TaskListComponent,
    ListComponent,
    TaskComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
