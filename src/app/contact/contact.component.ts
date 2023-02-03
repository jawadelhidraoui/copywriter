import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'
  ]
})
export class ContactComponent implements OnInit {
  public display = 'flex';
  public ngOnInit(): void{
    this.updateDisplay();
    window.addEventListener('resize', this.updateDisplay.bind(this));
  }

  private updateDisplay():void {
    this.display = 'flex';
    if (window.innerWidth < 900) {
      this.display = 'none';
    }
  }
}
