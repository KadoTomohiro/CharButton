import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.css']
})
export class ColorPanelComponent implements OnInit {

  @Input() r: number = 0
  @Input() g: number = 0
  @Input() b: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  onChangeR(value: number) {
    this.r = value
  }
  onChangeG(value: number) {
    this.g = value
  }
  onChangeB(value: number) {
    this.b = value
  }

  @HostBinding('style.background-color')
  get colorCode(): string {
    return `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}`
  }

  complementaryColorCode(): string {
    return `rgba(${255-this.r},${255-this.g},${255-this.b},1)`
  }

  toHex(value: number): string {
    return value.toString(16).padStart(2, '0')
  }
}
