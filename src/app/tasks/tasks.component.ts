import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Lean all about Angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Java',
      summary: 'Lean all about Java',
      dueDate: '2025-06-31',
    },
    {
      id: 't3',
      userId: 'u4',
      title: 'Master Typescript',
      summary: 'Lean all about Typescript',
      dueDate: '2024-06-31',
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((tasks)=>tasks.userId==this.userId);
  }
}
