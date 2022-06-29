describe("Payments test with setup and tear-down", function() {

  it('should create an object with the bill, tip, and tip percent values', function () {
    billAmtInput.value = "15";
    tipAmtInput.value = "1.5";

    createCurPayment()

    expect(createCurPayment().billAmt).toEqual("15");
    expect(createCurPayment().tipAmt).toEqual("1.5");
    expect(createCurPayment().tipPercent).toEqual(10);
  });

  it('should not create anything if the nothing is submitted', function () {
    submitPaymentInfo();

    expect(paymentId).toEqual(0);
    expect(allPayments[Object.keys(allPayments)[0]]).toBeUndefined();
  });

  it('should add payment data in the table', function () {
    appendPaymentTable({
      billAmt: "15",
      tipAmt: "1.5",
      tipPercent: 10});

    let pmtTableData = document.querySelectorAll("#paymentTable tbody tr td");

    expect(pmtTableData.length).toEqual(4);
    expect(pmtTableData[0].innerText).toEqual("$15");
    expect(pmtTableData[1].innerText).toEqual("$1.5");
    expect(pmtTableData[2].innerText).toEqual("10%");
    expect(pmtTableData[3].innerText).toEqual("X");
  });

  it('should update the summary tables with totaled values', function () {
    billAmtInput.value = "15";
    tipAmtInput.value = "1.5";

    submitPaymentInfo();
    updateSummary();

    billAmtInput.value = "15";
    tipAmtInput.value = "1.5";

    submitPaymentInfo();
    updateSummary();

    expect(summaryTds[0].innerText).toEqual("$30");
    expect(summaryTds[1].innerText).toEqual("$3");
    expect(summaryTds[2].innerText).toEqual("10%");
  });

  afterEach(function() {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
  });

});
