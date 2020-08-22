import { Component, OnInit } from '@angular/core';
import { PurposeService } from '../purpose.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {

  constructor(private ps:PurposeService, private route:ActivatedRoute, private router:Router) { }
  public listid;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params)=>{
      this.listid = params.get('listid')
    })
    

  }
  createTask(title){
    this.ps.createTasks(title,this.listid).subscribe((res)=>{
    
      this.router.navigate(['lists', this.listid])
    })
    
    
  }
  cancelTask(){
    this.router.navigate(['lists', this.listid])
  }
}
