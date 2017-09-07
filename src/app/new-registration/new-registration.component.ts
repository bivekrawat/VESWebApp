import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-registration',
  templateUrl: 'new-registration.component.html'
})

export class NewResistrationComponent implements OnInit {
  private count: number = 1;
  public items: Array<any>;

  constructor() {
    this.items = ["client", "Family", "Friend", "personal Staff"]
  }

  ngOnInit() {

  }
}
