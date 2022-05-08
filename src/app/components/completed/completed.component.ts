import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/task';
import { getTaskList } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  loaded:boolean=false;
  listaTasks:Task[]=[]
  completati:Task[]=[]
  numCompletati:number=1
  constructor() {
    getTaskList().then(lista => {
      this.listaTasks=<Task[]>lista;
      this.loaded=true;
      console.log(this.listaTasks)
      this.completati=this.listaTasks.filter(ele=>ele.isCompleted==true)
      this.numCompletati=this.completati.length
    })
  }
  ngOnInit(): void {
  }

}
