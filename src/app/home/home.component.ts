import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[]; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employees = this.dataService.getEmployees();
    this.employees = this.employees.sort((a,b)=>{return (a.houres < b.houres? 1: (a.houres === b.houres) ? 1: -1)}).slice(0,2);
  }

  
}
