import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
@Component({
  selector: 'app-component03',
  templateUrl: './component03.component.html',
  styleUrls: ['./component03.component.scss']
})
export class Component03Component implements OnInit {
  public subResult: string = '';
  constructor(private subjectService: SubjectService) {
    this.subjectService.userName.subscribe(
      (res:any)=>{
        this.subResult = res;
      }
    )
  }

  ngOnInit(): void {
  }
  change(data:any){
    this.subjectService.userName.next(data.value)
  }

}
