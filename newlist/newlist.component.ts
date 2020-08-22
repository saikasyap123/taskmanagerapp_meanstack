import { Component, OnInit } from '@angular/core';
import { PurposeService } from '../purpose.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.scss']
})
export class NewlistComponent implements OnInit {

  constructor(private ps:PurposeService, private route:ActivatedRoute, private router:Router) { }
  public listid;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params)=>{
      this.listid = params.get('presentid')
    })
    

  }
  createNewList(title){
    this.ps.createLists(title).subscribe((res)=>{
      if(this.listid==null){
        this.router.navigate(['lists'])
      }
      else{
      this.router.navigate(['lists', this.listid])}
      
    })
  }
  cancelList(){
    
    this.router.navigate(['lists', this.listid])
  }
}
