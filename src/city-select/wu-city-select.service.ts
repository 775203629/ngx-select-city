import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { chinaAddres } from './china_address';
@Injectable()
export class WuCitySelectService {
    chinaAddres = chinaAddres;

    constructor(private http: Http) { }

    getAddress() {
        return this.chinaAddres.address;
    }

}
