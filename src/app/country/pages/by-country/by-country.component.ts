import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = 'Hello World';

  constructor(private contryService: CountryService) { }

  search(){
    console.log(this.term);

    this.contryService.searchCountry(this.term)
      .subscribe(response => console.log(response))
  }

}

