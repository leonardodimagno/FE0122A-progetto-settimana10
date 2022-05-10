

import { Task } from '../interface/task';

  var TaskList:Task[]= []
  var nuovoId:number = 0;

  export async function getTaskList():Promise<Task[]>{
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(<Task[]>TaskList);
      }, 2000);
    });
  }


  export async function deleteTask(id:number):Promise<Task[]>{
    return await new Promise(resolve => {
      setTimeout(() => {
        TaskList=TaskList.filter(ele => ele.id!==id)
        resolve(<Task[]>TaskList);
      }, 2000);
    });
  }


  export async function addTask(titolo:string):Promise<Task[]>{

    return await new Promise(resolve => {
      setTimeout(()=>{
        let task:Task = {titolo:titolo, id:nuovoId++, isCompleted:false}
        TaskList.push(task)
        resolve (<Task[]>TaskList)
      },2000)
    })
  }



