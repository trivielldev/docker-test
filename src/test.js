var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:8080/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal("Hello World!");
        done();
      });
  });
});