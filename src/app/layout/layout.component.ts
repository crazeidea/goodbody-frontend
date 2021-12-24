import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  layout: 'empty' | 'sidenav';

  constructor(
    private route: ActivatedRoute
  ) {
    this.layout = this.route.snapshot.data.layout;
  }

}
