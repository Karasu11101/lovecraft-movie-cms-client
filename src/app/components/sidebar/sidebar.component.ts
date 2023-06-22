import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  /* Set the width of the side navigation to 250px */
  openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  }

/* Set the width of the side navigation to 0 */
  closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }
}
