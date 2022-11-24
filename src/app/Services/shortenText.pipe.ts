import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform { //a pipe for shortening texts with more than 15 words

  transform(text: any, length: number = 20, showAll: boolean = false, suffix: string = '...'): any {
    
    if (showAll) {
      return text;
    }

    if ( text.split(" ").length > length ) {
      
      return text.split(" ").splice(0, length).join(" ") + suffix;
    }

    return text;
  }
}