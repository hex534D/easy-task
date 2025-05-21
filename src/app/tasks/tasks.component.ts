import { Component, computed, inject, input, signal } from '@angular/core';
import { NewTask, Task, User } from '../../utils';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  taskDialogToggle = signal(false);
  private tasksService = inject(TasksService);

  get userSpecificTasks() {
    return this.tasksService.getTaskByUserId(this.user()?.id);
  }

  toggleAddTaskDialog() {
    this.taskDialogToggle.set(!this.taskDialogToggle());
  }

  onCancel() {
    this.toggleAddTaskDialog();
  }
}
