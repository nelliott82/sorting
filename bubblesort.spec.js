describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(swapLogic, 'func').and.callThrough(); // replace existing `swapLogic['lick']` method
  });
  it('getting to the center of swapLogic involves', function() {
    const arrayTest = [45, 9, 20, 6, -2, 632];
    bubbleSort(arrayTest);
    expect(swapLogic.func.calls.count()).toEqual(15);
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles a one item array', function() {
    expect(bubbleSort([2])).toEqual([2]);
    expect(bubbleSort(['a'])).toEqual(['a']);
    expect(bubbleSort(['hello, world'])).toEqual(['hello, world']);
  });
  it('correctly sorts a numeric multi-item array', function() {
    expect(bubbleSort([2, 1, 7, 4])).toEqual([1, 2, 4, 7]);
    expect(bubbleSort([0, 1, 20, 10, -2, 659])).toEqual([
      -2,
      0,
      1,
      10,
      20,
      659,
    ]);
  });
  it('correctly sorts a numeric multi-item array with duplicate numbers', function() {
    expect(bubbleSort([2, 1, 7, 7, 4])).toEqual([1, 2, 4, 7, 7]);
  });
  //   it('correctly sorts a multi-item array with strings', function() {
  //     expect(bubbleSort([2, 1, 7, 4])).toEqual([]);
  //     expect(bubbleSort([0, 1, 20, 10, -2, 659])).toEqual([]);
  //   });
});
