import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedId = signal<string>('');
  selectedUser = computed(
    () => this.users().find((user) => user.id === this.selectedId())!
  );

  onUserSelect(id: string) {
    this.selectedId.set(id);
  }
}
