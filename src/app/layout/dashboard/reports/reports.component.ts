import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, AfterViewInit {
    show: boolean = false;
    right: any;
    left: any;
    btn: any;
    ngAfterViewInit() {
        if (!this.show) {
            document.getElementById('sidebar-reports').style.background =
                '#1abc9c';
        }
    }
    constructor() {}

    ngOnInit() {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
    }
    btnClicked() {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    }
}
