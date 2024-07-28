import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navBardata } from './nav-bar-data';

interface SideNavToggleInf {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggleInf> = new EventEmitter()
  screenWidth = 0;
  collapsed = true;
  navData = navBardata;
  mainMenu;
  constructor() {
    this.mainMenu = localStorage.getItem('mainMenu')
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    console.log('initilaized side menu')
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  closeSideNav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
