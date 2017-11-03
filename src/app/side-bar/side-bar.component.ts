import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'pl-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  private items: MenuItem[];
  
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'fa-plus'},
          {label: 'Open', icon: 'fa-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'fa-refresh'},
          {label: 'Redo', icon: 'fa-repeat'}
      ]
  }];

  }//end:ngOnInit

}
