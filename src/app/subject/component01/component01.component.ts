import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.scss']
})
export class Component01Component implements OnInit {
  public subResult: string = '';
  constructor(
    private SubjectService: SubjectService
  ) {
    this.SubjectService.userName.subscribe(
      (res:any)=>{
        this.subResult = res;
      }
    )
  }

  ngOnInit(): void {
  }
  change(data:any){
    console.log(data.value);
    this.SubjectService.userName.next(data.value);
  }
}
