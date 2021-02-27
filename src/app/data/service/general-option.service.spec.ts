/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralOptionService } from './general-option.service';

describe('Service: GeneralOption', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralOptionService]
    });
  });

  it('should ...', inject([GeneralOptionService], (service: GeneralOptionService) => {
    expect(service).toBeTruthy();
  }));
});
