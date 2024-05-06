import { DayGreetingPipe } from './day-greeting.pipe';

describe('DayGreetingPipe', () => {
  it('create an instance', () => {
    const pipe = new DayGreetingPipe();
    expect(pipe).toBeTruthy();
  });
});
