import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const FlyIn = trigger('FlyIn', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(400px)',
    }),
    animate(400),
  ]),
]);
export const Appear = trigger('Appear', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [
    style({
      opacity: 0.3,
    }),
    animate(300),
  ]),
]);
