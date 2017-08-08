import { OnInit, EventEmitter } from '@angular/core';
import { WuCitySelectService } from './wu-city-select.service';
export declare class WuCitySelectComponent implements OnInit {
    private wuCitySelectService;
    result: EventEmitter<{}>;
    selected: string;
    isExpand: Boolean;
    list: Array<any>;
    constructor(wuCitySelectService: WuCitySelectService);
    ngOnInit(): void;
    selectHandle(provinceItem: any, cityItem: any, districtItem: any): void;
}
