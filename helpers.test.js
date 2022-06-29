describe("Helpers test with setup and tear-down)", function() {

  it('should total the values in allPayments', function () {
    allPayments = {
      payment1: {
        billAmt: "20",
        billTip: "2"
      }, payment2: {
        billAmt: "20",
        billTip: "2"
      }}

    expect(sumPaymentTotal("billAmt")).toEqual(40);
    expect(sumPaymentTotal("billTip")).toEqual(4);
  });

  it('should calculate the tip percent', function () {

    expect(calculateTipPercent(40, 10)).toEqual(25);
    expect(calculateTipPercent(30, 3)).toEqual(10);
  });

  afterEach(function() {
    // teardown logic
    allPayments = {};
  });
});
