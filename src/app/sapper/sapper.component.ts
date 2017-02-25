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
  gameOver = '';

  constructor() {
    this.generateFieldList();
    console.log('sapper', this);
  }

  ngOnInit() {
  }

  generateFieldList () {
    let mines = 0,
      sields = this.currentScheme.rows * this.currentScheme.columns;

    this.gameOver = '';
    this.fieldList = [];

    for (let x = 0; x < this.currentScheme.rows; x++) {
      let row = [];

      for (let y = 0; y < this.currentScheme.columns; y++) {
        row.push({row: x, col: y, neighbors: 0});
      }
      this.fieldList.push(row);
    }

    do {
      var r = Math.round(Math.random() * this.currentScheme.rows - .5),
        c = Math.round(Math.random() * this.currentScheme.columns - .5),
        field = this.fieldList[r][c];

      if (!field.mine) {
        field.mine = true;

        let listNeighbors = this.neighbors(field);

        for (let i in listNeighbors) {
          listNeighbors[i].neighbors++;
        }
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

  onRightClick (e, item) {
    e.preventDefault();
    if (item.flag) {
      if (item.flag === 2) {
        item.flag = 0;
        return;
      }
      item.flag = 2;
      return;
    }
    item.flag = 1;
  }

  click (e, item) {
    e.preventDefault();
    if (item.open || item.flag) {
      return;
    }
    if (item.mine) {
      this.setGameOver(true);
    }

    item.open = true;
    if (!item.neighbors) {
      this.openNeighbors(item);
    }
  }

  setGameOver (error) {
    this.gameOver = error ? 'error': 'succes';
  }

  openNeighbors (item) {
    let listNeighbors = this.neighbors(item);

    for (let i in listNeighbors) {
      let $this = listNeighbors[i];

      if (!$this.open) {
        $this.open = true;
        if (!$this.neighbors) {
          setTimeout( () => {
            this.openNeighbors($this);
          }, 70);
        }
      }
    }
  }

  neighbors = function (item) {
    var r = item.row,
      c = item.col,
      list = [];

    for (var i = -1; i < 2; i++) {
      var ir = r + i;
      if (ir >= 0 && ir < this.currentScheme.rows) {
        for (var j = -1; j < 2; j++) {
          var jc = c + j;
          if (jc >= 0 && jc < this.currentScheme.columns) {
            list.push(this.fieldList[ir][jc]);
          }
        }
      }
    }
    return list;
  }
}
