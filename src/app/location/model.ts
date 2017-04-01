import { Need } from '../need/model';
import { Occupant } from '../occupant/model';

export class Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    notes: string;
    needs: Need[];
    occupants: Occupant[];
}