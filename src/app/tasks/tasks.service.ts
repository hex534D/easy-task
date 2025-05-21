import { computed, Injectable, signal } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask, Task } from '../../utils';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) this.tasks = JSON.parse(tasks);
  }

  addTask(task: Task) {``
    this.tasks.unshift(task);
    this.saveTasks();
  }

  getTaskByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
