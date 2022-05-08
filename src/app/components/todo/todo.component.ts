import { Component, OnInit } from '@angular/core';
import { getTaskList, addTask, deleteTask } from 'src/app/service/todos.service';
import { Task } from 'src/app/interface/task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  loaded:boolean=false;
  listaTasks!:Task[];
  titolo:string="test"
  idElimina:number=100
  eliminazione:boolean=false;
  oops:boolean=false;



  constructor() {
    getTaskList().then(lista => {
      this.listaTasks=<Task[]>lista;
      this.loaded=true;
      console.log(this.listaTasks)})
  }
  getTitolo(event:Event){
    const target = <HTMLInputElement>event.target;
    this.titolo= target.value;
    console.log(this.titolo)
  }
  addTask(){
    addTask(this.titolo).then(lista => {
    this.listaTasks=<Task[]>lista;
    console.log(this.listaTasks)
  })
  }
completato(identifier:any){
    let completato = this.listaTasks.find(ele => ele.id==identifier)
    completato!.isCompleted=true
    console.log(this.listaTasks)
  }
  getIdElimina(id:number){
    this.idElimina=id
  }
  deleteTask(){
    this.eliminazione=true
    deleteTask(this.idElimina).then(lista => {
        this.listaTasks=<Task[]>lista;
        console.log(this.listaTasks)
        this.eliminazione=false
  })
  }


  ngOnInit(): void {
  }

}
