import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sapper',
  templateUrl: './sapper.component.html',
  styleUrls: ['./sapper.component.scss']
})
export class SapperComponent implements OnInit {
  fieldList = [];
  scheme = [
    {rows: 9, columns: 9, mines: 10},
    {rows: 16, columns: 16, mines: 40},
    {rows: 16, columns: 30, mines: 99}
  ];
  currentScheme = this.scheme[0];
  selectOpen = false;

  constructor() {
    this.generateFieldList();
    console.log('sapper', this);
  }

  ngOnInit() {
  }

  generateFieldList () {
    let mines = 0,
      sields = this.currentScheme.rows * this.currentScheme.columns;

    this.fieldList = [];

    for (let x = 0; x < this.currentScheme.rows; x++) {
      let row = [];

      for (let y = 0; y < this.currentScheme.columns; y++) {
        row.push({row: x, coll: y});
      }
      this.fieldList.push(row);
    }

    do {
      var r = Math.round(Math.random() * this.currentScheme.rows - .5),
        c = Math.round(Math.random() * this.currentScheme.columns - .5),
        field = this.fieldList[r][c];

      if (!field.mine) {
        field.mine = true;
        mines++;
      }
    } while (mines !== this.currentScheme.mines)
  }

  toggle () {
    this.selectOpen = !this.selectOpen;
  }

  setScheme (item) {
    this.currentScheme = item;
    this.selectOpen = false;
    this.generateFieldList();
  }
}
