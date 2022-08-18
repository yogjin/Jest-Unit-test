const check = require('../check');
// function check(predicate, onSuccess, onFail) {
//   if (predicate()) {
//     onSuccess('yes');
//   } else {
//     onFail('no');
//   }
// }
describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess('yes') when predicate() is true", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess).toBeCalledTimes(1); // onSuccess 호출 횟수
    expect(onSuccess).toHaveBeenCalledWith('yes'); // 호출 시
    expect(onFail).toBeCalledTimes(0); // onFail 호출 횟수
  });

  it("should call onFail('no') when predicate() is false", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toBeCalledTimes(1); // onFail 호출 횟수
    expect(onFail).toHaveBeenCalledWith('no'); // 호출 시
    expect(onSuccess).toBeCalledTimes(0); // onFail 호출 횟수
  });
});
