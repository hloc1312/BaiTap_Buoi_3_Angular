import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  Age: number = 19;
  allowNewServer = false;
  
  name = '';

  onResetText(){
    
    this.name = '';
  }  
  constructor() {

  }


  public BranchCars = ['Honda', 'Tesla', 'Hondai', 'BMW'];
  
  ngOnInit(): void {
  }

}
