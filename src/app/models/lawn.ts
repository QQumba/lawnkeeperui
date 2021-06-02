import {LawnState} from './lawnState';

export interface Lawn {
  id: number;
  name: string;
  location?: string;
  mode: string;
  state: LawnState;
  maxHumidity?: number;
  minHumidity?: number;
  humidity?: number;
  maxWaterConsumptionPerHour?: number;
  waterConsumptionPerHour?: number;
  userEmail?: string;
}
