import { TestBed } from '@angular/core/testing';
import { HackerService } from './hacker.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HackernewsModel } from 'src/Models/hackernews.model';

describe('HackerService', () => {
  let service: HackerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HackerService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(HackerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getHackerNews should return expected result', (done) => {
    const expectedResult: HackernewsModel[] = [      
      {
        title: 'HTML attributes for improved accessibility and user experience'
        , url: 'https://www.htmhell.dev/adventcalendar/2023/4/'
      },
      {
        title: 'Rob Pike: Gobs of data (2011)'
        , url: 'https://go.dev/blog/gob'
      },
      {
        title: 'Rob Pike: Gobs of data (2012)'
        , url: 'https://go.dev/blog/gob'
      },
    ];

    service.getHackerNews().subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });

    const httpRequest = httpTestingController.expectOne('https://localhost:7063/hackernews/get');
    httpRequest.flush(expectedResult);
  });

  it('#getHackerNews should use HTTP GET to get result', () => {
    service.getHackerNews().subscribe();

    const httpRequest = httpTestingController.expectOne('https://localhost:7063/hackernews/get');

    expect(httpRequest.request.method).toEqual('GET');
  });

  it('#getHackerNews should filter data', (done) => {
    const responseResult: HackernewsModel[] = [
      {
        title: 'HTML attributes for improved accessibility and user experience'
        , url: 'https://www.htmhell.dev/adventcalendar/2023/4/'
      },
      {
        title: 'Rob Pike: Gobs of data (2011)'
        , url: 'https://go.dev/blog/gob'
      },
      {
        title: 'Rob Pike: Gobs of data (2012)'
        , url: 'https://go.dev/blog/gob'
      },
    ];

    const expectedResult: HackernewsModel[] = [
      {
        title: 'HTML attributes for improved accessibility and user experience'
        , url: 'https://www.htmhell.dev/adventcalendar/2023/4/'
      },
      {
        title: 'Rob Pike: Gobs of data (2011)'
        , url: 'https://go.dev/blog/gob'
      },
      {
        title: 'Rob Pike: Gobs of data (2012)'
        , url: 'https://go.dev/blog/gob'
      },
    ]

    service.getHackerNews().subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });

    const httpRequest = httpTestingController.expectOne('https://localhost:7063/hackernews/get');
    httpRequest.flush(responseResult);
  });

});
