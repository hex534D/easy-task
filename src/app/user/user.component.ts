import { Component, computed, input, output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from '../../utils';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input<boolean>();
  selectedUser = output<string>();
  imagePath = computed(() => '/users/' + this.user().avatar);

  onSelectUser() {
    this.selectedUser.emit(this.user().id);
  }
}
