import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEachProviders(() => {
    return [ AppComponent ];
  });

  it('works', inject([AppComponent], (app : AppComponent) => {
    expect(true).toBe(true);
  }));
});
