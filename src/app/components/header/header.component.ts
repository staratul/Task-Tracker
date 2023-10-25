import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color : string = 'green';
  text : string = 'Add';
  title : string = "Task Tracker";
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
    if(this.showAddTask) {
      this.text = "Close";
      this.color = "red";
    } else {
      this.text = "Add";
      this.color = "green";
    }
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

}
