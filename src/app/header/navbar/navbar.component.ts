import { Component, OnInit } from '@angular/core';
import { nav_links } from '../headerlinks';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  nav_links = nav_links

  constructor() {};
  ngOnInit(): void {
  };
}