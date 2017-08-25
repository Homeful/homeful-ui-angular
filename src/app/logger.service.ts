import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }
    
    log(str: string): void {
        console.log(str);
    }
}
