import { WuCitySelectPipe } from './wu-city-select.pipe';
import { WuCitySelectService } from './wu-city-select.service';
import { WuCitySelectComponent } from './wu-city-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        WuCitySelectComponent,
        WuCitySelectPipe
    ],
    providers: [WuCitySelectService],
    exports: [WuCitySelectComponent]
})
export class WuCitySelectModule { }
