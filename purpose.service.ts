import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebrequestService } from './webrequest.service';
import { Task } from '../../../backend/models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class PurposeService {

  constructor(private webReq:WebrequestService, private http:HttpClient) { }
  getLists(){
    return this.http.get("http://localhost:3000/list/all")
  }
  getTasks(listid : string){
    return this.http.get(`http://localhost:3000/task/lists/${listid}`)
  }
  createLists(title : string){
    return this.http.post('http://localhost:3000/list/lists', {"title":title})
  }
  createTasks(title:string, listid:string){
    return this.http.post(`http://localhost:3000/task/lists/${listid}`, {"title":title})
  }
  deleteLists(id : string){
    return this.http.delete(`http://localhost:3000/list/lists/${id}`)
  }
  deleteTasks(listid:string, taskid:string){
    return this.http.delete(`http://localhost:3000/task/lists/${listid}/${taskid}`)
  }
  updateLists(id:string, title:string){
    return this.http.patch(`http://localhost:3000/list/lists/${id}`,{"title":title})
  }
  
  completeTask(listid:string, taskid:string){
    return this.http.post(`http://localhost:3000/task/lists/complete/${listid}/${taskid}`, {"completed":true})
  }
  }
