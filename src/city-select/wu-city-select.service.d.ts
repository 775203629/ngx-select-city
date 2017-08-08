import { Http } from '@angular/http';
export declare class WuCitySelectService {
    private http;
    chinaAddres: {
        address: ({
            'name': string;
            'value': string;
        } | {
            'name': string;
            'value': string;
            'parent': string;
        })[];
    };
    constructor(http: Http);
    getAddress(): ({
        'name': string;
        'value': string;
    } | {
        'name': string;
        'value': string;
        'parent': string;
    })[];
}
