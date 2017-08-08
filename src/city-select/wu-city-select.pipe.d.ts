import { PipeTransform } from '@angular/core';
export declare class WuCitySelectPipe implements PipeTransform {
    transform(arr: any, parent?: any): any;
    isProvince(e: any): boolean;
    isChild(arr: any, parent: any): any[];
}
