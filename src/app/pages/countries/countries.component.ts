import { Component, OnInit } from '@angular/core';
import { NovelcovidService } from 'src/app/core/services/novelcovid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(
    private novelCovid: NovelcovidService
  ) { }

  ngOnInit(): void {
    this.getCountriesInfo();
  }

  CountriesInfo: any;
  filteredCountries: any[] = [];

  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCountries = this.listFilter ? this.doFilter(this.listFilter) : this.CountriesInfo;
  }

  doFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.CountriesInfo.filter((country: any) =>
    country.country.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getCountriesInfo(){
    this.novelCovid.getCountriesInfo()
    .subscribe(
      (res) => {
        //console.log(res)
        this.CountriesInfo = res;
        console.log(this.CountriesInfo);
        this.filteredCountries = this.CountriesInfo;
        this.listFilter = '';
      },
      (err) => {
        console.log(err);
      },
    );
  }

}