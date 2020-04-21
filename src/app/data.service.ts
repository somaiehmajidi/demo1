import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './employees-mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id:1, name: "Mr. Smith", description:"Team Manager", email: "seo@email.com"},
    {id:2, name: "Ms. Doe", description:"Tech Manager", email: "sto@email.com"},
    {id:3, name: "Mr. Hanks", description:"Product manager", email: "pm@email.com"},
    {id:4, name: "Ms. Adams", description:"PR Manager", email: "pr@email.com"}
  ];

  constructor() { }

  public getContacts (): Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact (contact: {id, name, description, email}){
    this.contacts.push(contact);
  }

  public getEmployees(): Employee[]{
    return EMPLOYEES;
  }
  public getEmployee(id: number): Employee{
    return EMPLOYEES.find(employee => employee.id === id);
  }

}
