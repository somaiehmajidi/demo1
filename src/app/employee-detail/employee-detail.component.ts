import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(private dataService: DataService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = this.dataService.getEmployee(id);
  }

  goBack():void {
    this.location.back();
  }

}
