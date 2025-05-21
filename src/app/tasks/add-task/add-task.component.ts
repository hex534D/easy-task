import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask, Task } from '../../../utils';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  userId = input.required<string>();
  cancel = output<void>();
  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.cancel.emit();
  }

  onCreateTask() {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    };
    this.tasksService.addTask(newTask);
    this.onCancel();
  }
}
