import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IconComponent } from './icons/icons.component'
import { HomeBodyComponent } from './homebody/homebody.component'

@NgModule({
    imports: [CommonModule],
    declarations: [IconComponent, HomeBodyComponent],
    exports: [IconComponent, HomeBodyComponent]
})

export class HomeModule {}