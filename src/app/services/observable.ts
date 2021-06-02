import {Observer} from './observer';

export interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}
