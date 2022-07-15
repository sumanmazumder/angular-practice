import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-component02',
  templateUrl: './component02.component.html',
  styleUrls: ['./component02.component.scss']
})
export class Component02Component implements OnInit {
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
