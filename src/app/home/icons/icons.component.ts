import { Component, HostListener, OnInit } from '@angular/core';
import { contact_links } from '../contact_icons'

@Component({
  selector: 'home-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})

export class IconComponent implements OnInit {
  contact_links = contact_links;
    
  ngOnInit(): void {
  };
}