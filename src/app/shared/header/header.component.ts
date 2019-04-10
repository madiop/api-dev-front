import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // {'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 55, 'stickySetTop': '-55px', 'stickyChangeLogo': true}
  
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 55) {
       let element = document.getElementById('header');
       element.classList.add('sticky-header-active');
     } else {
      let element = document.getElementById('header');
        element.classList.remove('sticky-header-active'); 
     }
  }

}
