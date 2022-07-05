import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bit-button',
  templateUrl: './bit-button.component.html',
  styleUrls: ['./bit-button.component.css']
})
export class BitButtonComponent {

  @Input() bit: boolean  = false
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  onToggle() {
    this.bit = !this.bit
    this.toggle.emit(this.bit)
  }

}
