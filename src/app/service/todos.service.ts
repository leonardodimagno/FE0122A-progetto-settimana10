

import { Task } from '../interface/task';

  var listaDiTask:Task[]= []
  var nuovoId:number = 0;

  export async function getTaskList():Promise<Task[]>{
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(<Task[]>listaDiTask);
      }, 2000);
    });
  }

  export async function addTask(titolo:string):Promise<Task[]>{

    return await new Promise(resolve => {
      setTimeout(()=>{
        let task:Task = {titolo:titolo, id:nuovoId++, isCompleted:false}
        listaDiTask.push(task)
        resolve (<Task[]>listaDiTask)
      },2000)
    })
  }

  export async function deleteTask(id:number):Promise<Task[]>{
    return await new Promise(resolve => {
      setTimeout(() => {
        listaDiTask=listaDiTask.filter(ele => ele.id!==id)
        resolve(<Task[]>listaDiTask);
      }, 2000);
    });
  }



