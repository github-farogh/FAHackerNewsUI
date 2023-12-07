import { Component, OnInit } from '@angular/core';
import { HackernewsModel } from 'src/Models/hackernews.model';
import { HackerService } from '../Services/hacker.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {
  searchValue:string = "";
  dataLoaded:boolean = true;
  public hackNewData: HackernewsModel[] = [];
  constructor(private hackerService: HackerService) 
  { 
  }

  ngOnInit() {
    //Call method to get news list. 
    this.getHackerNewsData();
  } 

  //Call api get method to get news list.
  getHackerNewsData()
  {   
    this.hackerService.getHackerNews().subscribe(result => {
      if (result != null) {
        this.hackNewData = result;
        this.dataLoaded = false
      }
    });
  }

  //Function to clear table search
  clear(table: Table) {
    
    this.searchValue = '';
    table.clear();
}

}
