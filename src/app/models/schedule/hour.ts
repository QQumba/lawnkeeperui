import {Time} from '@angular/common';

export interface Hour{
  time: Date;
  weatherIcon?: string;
  temperature?: number;
  active?: boolean;
  scheduled: boolean;
  weekly?: boolean;
}
