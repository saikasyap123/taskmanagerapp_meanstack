import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../../../../backend/models/taskmodel';
import { List } from '../../../../../backend/models/listmodel';
import { PurposeService } from '../../purpose.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {
  lists : List[]
  tasks : Task[]
  selectedId : string;
  listid : string;
  listid1 : string;
  public isActive;
  task: any;
  constructor(private route:ActivatedRoute, private router:Router, private ps : PurposeService, private sb:MatSnackBar) { }

  ngOnInit(): void {
    this.ps.getLists().subscribe((lists:List[])=>{
      this.lists = lists
    })
    
    this.route.paramMap.subscribe((params:Params)=>{
      this.selectedId = params.get('listid')
      this.ps.getTasks(this.selectedId).subscribe((tasks:Task[])=>{
        this.tasks = tasks
      
        
      })})
      
    }


  getListTasks(){
    this.route.paramMap.subscribe((params:Params)=>{
      this.selectedId = params.get('listid')
      this.ps.getTasks(this.selectedId).subscribe((tasks:Task[])=>{
        this.tasks = tasks
        
    })
    
    
    })
  }
  onDeleteList(){
    this.ps.deleteLists(this.selectedId).subscribe((res:any)=>{
      this.router.navigate(['/lists'])
    })
    this.sb.open('list deleted!')
    setTimeout(()=>{
      this.sb.dismiss()
    }, 3000)
  }
  onDeleteTask(id:string){
    this.ps.deleteTasks(this.selectedId, id).subscribe((res:any)=>{
    this.tasks = this.tasks.filter(val=>val._id!==id)
    })
    this.sb.open('task deleted!')
    setTimeout(()=>{
      this.sb.dismiss()
    }, 4000)
  }
  onTaskClick(task:Task){
    
    this.ps.completeTask(this.selectedId, task._id).subscribe((res)=>{
      
    })
    location.reload()
    }
  


  createNewList(){
    this.route.paramMap.subscribe((params:Params)=>{
      let id = params.get('listid')
      this.listid1 = id
    })
    if (this.listid1==null){
      this.router.navigate(['new-list'])
    }
    else{
    this.router.navigate(['new-list', this.listid1])}

  }
  addTask(){
    this.route.paramMap.subscribe((params:Params)=>{
      let id = params.get('listid')
      this.listid = id
    })
    if(this.listid==null){
      this.sb.open("Select a list!")
      setTimeout(()=>{
        this.sb.dismiss()
      }, 3000)
    }
    else{
    this.router.navigate(['new-task',this.listid])}
  }
  
  editlist(){
    this.router.navigate(['edit-list', this.selectedId])
  }
}


