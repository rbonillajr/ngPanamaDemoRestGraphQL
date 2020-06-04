import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/interfaces/graphql';

@Component({
  selector: 'app-graphql-list',
  templateUrl: './graphql-list.component.html',
  styleUrls: ['./graphql-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphqlListComponent {
  @Input() data: Car[];
  @Output() clicked = new EventEmitter<any>();

  handleClick(item: any) {
    this.clicked.emit(item);
  }

}
