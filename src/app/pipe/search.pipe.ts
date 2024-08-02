import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value:any , args:any ): any {
    let text=args?.toLowerCase()
    return value.filter((e:any)=>{

      return JSON.stringify(e).toLocaleLowerCase().includes(text)
    })

  }

}