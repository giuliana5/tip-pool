describe("Servers test with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a server when there is a blank input', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(allServers).toEqual({});
  })

  it('should update the table with server & earnings', function () {
    submitServerInfo();

    let tableData = document.querySelectorAll('#serverTable tbody tr td');

    expect(tableData.length).toEqual(3);
    expect(tableData[0].innerText).toEqual('Alice');
    expect(tableData[1].innerText).toEqual('$0.00');
    expect(tableData[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
