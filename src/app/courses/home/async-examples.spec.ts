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

  fit('Asynchronous test example - plain Promise()', () => {
    let test = false;

    console.log('Creating a promise');

    Promise.resolve().then(() => {
      console.log('Promise first then() evaluated successfully');
      Promise.resolve().then(() => {
        console.log('Promise second then() evaluated successfully');
        test = true;
      });
    });

    console.log('Running test assertions');
    expect(test).toBeTruthy();
  });
});
