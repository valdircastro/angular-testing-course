import {fakeAsync, flush, tick} from '@angular/core/testing';

fdescribe('Async Testing Examples', () => {
  it('Asynchronous test examples with Jasmine done()', (done) => {
    let test = false;

    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('Asynchronous test example - setTimeout()', fakeAsync(() => {
      let test = false;

      setTimeout(() => {
        console.log('running assertions setTimeout()');
        test = true;
      }, 1000);
      flush();
      expect(test).toBeTruthy();
    })
  );
});
