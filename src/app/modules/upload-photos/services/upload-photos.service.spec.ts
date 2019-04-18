import { TestBed } from '@angular/core/testing';

import { UploadPhotosService } from './upload-photos.service';

describe('UploadPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadPhotosService = TestBed.get(UploadPhotosService);
    expect(service).toBeTruthy();
  });
});
