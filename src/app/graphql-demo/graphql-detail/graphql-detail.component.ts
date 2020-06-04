import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges, SimpleChanges, Output, EventEmitter
} from '@angular/core';
import { Car } from 'src/interfaces/graphql';

@Component({
  selector: 'app-graphql-detail',
  templateUrl: './graphql-detail.component.html',
  styleUrls: ['./graphql-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphqlDetailComponent implements OnChanges {
  @Input() car: Car;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Car>();

  editingCar: Car;

  ngOnChanges(changes: SimpleChanges) {
    this.editingCar = { ...this.car };
  }

  cancel() {
    this.unselect.emit();
  }

  saveCar() {
    this.save.emit(this.editingCar);
    this.cancel();
  }

}
