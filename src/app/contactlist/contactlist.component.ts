import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(public dataService: DataService,
              private router: Router) { }

  ngOnInit(){
    this.contacts = this.dataService.getContacts();
  }

  public selectContact(contact){
    this.selectedContact = contact;
  }

  newContact(){
    this.router.navigate(['/new-contact']);
  }

}
