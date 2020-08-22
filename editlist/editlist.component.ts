import { Component, OnInit } from '@angular/core';
import { PurposeService } from '../purpose.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';


@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {

  constructor(private ps:PurposeService, private route:ActivatedRoute, private router:Router) { }

  public listid;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params)=>{
      this.listid = params.get('listid')
    })
    

  }
  editList(title){
    this.ps.updateLists(this.listid,title).subscribe((res)=>{
      this.router.navigate(['lists', this.listid])}
    )}
  back(){
    this.router.navigate(['lists', this.listid])}
  }


