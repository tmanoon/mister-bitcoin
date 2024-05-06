import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayGreeting'
})
export class DayGreetingPipe implements PipeTransform {
  transform(value: string | Date): string {
    const hour = new Date(value).getHours()
    if(hour >= 1 && hour <= 10) return 'Good morning'
    if(hour <= 12 && hour >= 11) return 'Good noon'
    if(hour > 12 && hour <= 18) return 'Good afternoon'
    return 'Good evening'
  }

}
