# ngx-select-city
这是个省市级联的插件，因为在做angular应用的时候很多地方会用到省市选择，网上找的都有些问题，每次都copy太麻烦了，也没有找到时候国内码农用的，就自己造轮子了，首先感谢https://github.com/zjcboy/mit-city-select 的作者。（第一次看到时候很开心，以为可以直接用了，没想到也是半成品）

##安装
```sh
npm install https://github.com/Seraphims/ngx-select-city --save
```

## 使用
#### 1.引入WuCitySelectModule
```ts
import { WuCitySelectModule } from 'ngx-select-city';

@NgModule({
    imports: [
        BrowserModule,
        WuCitySelectModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
#### 2.页面使用
```html
<app-wu-city-select [selected]="'默认值(可为空)'" (result)="citySelect($event)"></app-wu-city-select>

```
#### 3.结果
```ts
citySelect(e){
     // 结果:{ name: '省/市/区', value: '省编码/市编码/区编码' }
    console.log(e)
}
```
