import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
