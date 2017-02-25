import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sapper',
  templateUrl: './sapper.component.html',
  styleUrls: ['./sapper.component.scss']
})
export class SapperComponent implements OnInit {
  fieldList = [];

  constructor() {
    this.generateFieldList ();
  }

  ngOnInit() {
  }

  generateFieldList () {
    this.fieldList = [];

    for (let x = 0; x < 10; x++) {
      let row = [];

      for (let y = 0; y < 10; y++) {
        row.push({row: x, coll: y});
      }
      this.fieldList.push(row);
    }
  }

}
