import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerService } from '../Services/hacker.service';
import { HackerNewsComponent } from './hacker-news.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

describe('HackerNewsComponent', () => {
  let component: HackerNewsComponent;
  let fixture: ComponentFixture<HackerNewsComponent>;
  let service: HackerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TableModule, ButtonModule],
      providers: [HackerService],
      declarations: [ HackerNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HackerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data', () => {
    expect(component.getHackerNewsData).toBeTruthy();
  })  
});
