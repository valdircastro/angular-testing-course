import {fakeAsync, flush, flushMicrotasks, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

describe('Async Testing Examples', () => {
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

  it('Asynchronous test example - plain Promise()', fakeAsync(() => {
    let test = false;

    console.log('Creating a promise');

    Promise.resolve().then(() => {
      console.log('Promise first then() evaluated successfully');
      test = true;
      Promise.resolve().then(() => {
        console.log('Promise second then() evaluated successfully');
      });
    });

    flushMicrotasks();

    console.log('Running test assertions');
    expect(test).toBeTruthy();
  }));

  it('Asynchronous test example - Promises + set timeout()', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;
      setTimeout(() => {
        counter += 1;
      }, 1000);
    });

    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    flush();
    expect(counter).toBe(11);
  }));

  it('Asynchronous test examples - Observables()', fakeAsync(() => {
    let test = false;
    console.log('Creating Observables');
    const test$ = of(test).pipe(delay(1000));
    test$.subscribe(() => {
      test = true;
    });
    tick(1000);
    console.log('Running test assertions');
    expect(test).toBe(true);
  }));
});
