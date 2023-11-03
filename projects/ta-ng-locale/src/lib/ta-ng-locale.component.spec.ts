import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgLocaleModule } from './ta-ng-locale.module';

describe('NgLocaleModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgLocaleModule],
      }).compileComponents();
    }),
  );

  it('should create', () => {
    expect(NgLocaleModule).toBeDefined();
  });
});
