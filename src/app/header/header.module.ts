import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HamburgerComponent } from './hamburger/hamburger.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LogosComponent } from './logos/logos.component'

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HamburgerComponent, NavbarComponent, LogosComponent],
    exports: [HamburgerComponent, NavbarComponent, LogosComponent]
})

export class HeaderModule {}