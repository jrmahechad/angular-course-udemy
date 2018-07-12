import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return value;
    }
    const splitString = value.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    return joinArray;
  }

}
