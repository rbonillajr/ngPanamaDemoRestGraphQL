import { Component, OnInit } from '@angular/core';
import { RestDemoService } from './rest-demo.service';
import { IProvincia } from '../../interfaces/schema';

@Component({
  selector: 'app-rest-demo',
  templateUrl: './rest-demo.component.html',
  styleUrls: ['./rest-demo.component.css']
})
export class RestDemoComponent implements OnInit {

  public provincias: IProvincia[];
  constructor(public service: RestDemoService) { }

  ngOnInit(): void {
    this.service.getProvincias().subscribe((data: {}) => {
      this.provincias = data as IProvincia[];
      console.log(this.provincias);
    });

  }

}
