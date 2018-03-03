import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Datatable export to excel,pdf,copy and print';
  constructor() { }
  ngOnInit() {
    $(document).ready(function () {
      var table = $('#example').DataTable({ lengthChange: false, buttons: ['copy', 'csv', 'excel', 'pdf', 'colvis'] });

      table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
    });
  }
}
