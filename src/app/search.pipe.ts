import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchInput: string) : any {
    // console.log(value, searchInput);

    if(!searchInput){
      return []
    }
    else{
      let inputSearch = searchInput.toLowerCase();
      console.log(value.filter((ele:any)=> ele.name.toLowerCase().includes(inputSearch)));
      return value.filter((ele:any)=> ele.name.toLowerCase().includes(inputSearch));
    }





















    // if(!searchInput){
    //   return []
    // }
    //   searchInput = searchInput.toLowerCase();
    //   return value.filter(
    //     x =>x.toLowerCase().includes(searchInput)
    //   )
  }

}
