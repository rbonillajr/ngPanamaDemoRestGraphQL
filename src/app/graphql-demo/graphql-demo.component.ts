import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CarGQL, UpdateCarNameGQL, Car } from 'src/interfaces/graphql';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-graphql-demo',
  templateUrl: './graphql-demo.component.html',
  styleUrls: ['./graphql-demo.component.css']
})
export class GraphqlDemoComponent implements OnInit {
  data: any[];
  loading = true;
  error: any;
  selected: Car = null;

  constructor(private apollo: Apollo, public service: CarGQL, public updateService: UpdateCarNameGQL) { }

  ngOnInit(): void {
    this.service.watch()
      .valueChanges
      .subscribe(
        result => {
          console.log(result);
          this.data = result.data && (result.data as any).car;
          this.loading = result.loading;
          this.error = result.errors;
        });
  }

  onClick(car: Car) {
    this.selected = car;
  }

  unselect() {
    this.selected = null;
  }

  save(car: Car) {
    this.updateService.mutate({ _id: car._id, newName: car.name }).subscribe(result => {
      console.log(result);
    });
    console.log(car);
  }

}
