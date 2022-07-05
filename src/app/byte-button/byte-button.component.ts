import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type Byte  = [boolean, boolean,boolean,boolean,boolean,boolean,boolean,boolean]

@Component({
  selector: 'app-byte-button',
  templateUrl: './byte-button.component.html',
  styleUrls: ['./byte-button.component.css']
})
export class ByteButtonComponent implements OnInit {

  @Input() value: number = 0
  @Output() change: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  get byte(): Byte {
    const byteString = this.value.toString(2).padStart(8, '0')
    return byteString.split('')
      .map(bit => bit === '1')  as Byte
  }

  onToggle(bit: boolean, index: number) {
    const currentByte= this.byte;
    currentByte.splice(index, 1, bit)
    const newValue = Number.parseInt(currentByte.map(bit => bit ? '1' : '0').join(''), 2)
    this.change.emit(newValue)
  }


}
