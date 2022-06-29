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
});
