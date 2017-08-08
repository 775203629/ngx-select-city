import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WuCitySelectService } from './wu-city-select.service';
@Component({
  selector: 'app-wu-city-select',
  template: `
      <div class="wu-city-select">
        <div class="select" (click)="isExpand = !isExpand">
          <input type="text" placeholder="选择所在地区" [(ngModel)]="selected" [disabled]="true">
        </div>
        <div class="list-menu" *ngIf="isExpand">
          <div class="sub-list">
            <ul>
              <li *ngFor="let item of list | wuCitySelect"
              (click)="provinceId = item.value;provinceName = item.name;cityId = undefined;provinceItem = item"
                [class.active]="item.value === provinceId">{{item.name}}</li>
            </ul>
          </div>
          <div class="sub-list" *ngIf="provinceId">
            <ul>
              <li *ngFor="let item of list | wuCitySelect:provinceId"
              (click)="cityId = item.value;cityName = item.name;cityItem = item" [class.active]="item.value === cityId">{{item.name}}</li>
            </ul>
          </div>
          <div class="sub-list" *ngIf="cityId">
            <ul>
              <li *ngFor="let item of list | wuCitySelect:cityId"
                (click)="districtId = item.value;districtName = item.name;districtItem = item;selectHandle(provinceItem,cityItem,districtItem);"
                [class.active]="item.value === districtId">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    `,
})
export class WuCitySelectComponent implements OnInit {
  @Output() result = new EventEmitter();
  @Input() selected: string;
  public isExpand: Boolean = false;
  public list: Array<any>;
  constructor(private wuCitySelectService: WuCitySelectService) { }

  ngOnInit() {
    this.list = this.wuCitySelectService.getAddress();
  }

  selectHandle(provinceItem, cityItem, districtItem) {
    this.isExpand = false;
    this.selected = provinceItem.name + '/' + cityItem.name + '/' + districtItem.name;
    const value = provinceItem.value + '/' + cityItem.value + '/' + districtItem.value;
    this.result.emit({ name: this.selected, value: value });
  }


}
