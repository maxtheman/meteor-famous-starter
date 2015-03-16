if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("famous tests", function(){
      it("famous exists", function(){
        chai.expect(famous).to.exist;
      });
    });

    describe("incremeter", function(){
    	it("should start at 0", function(){
    		chai.assert.equal(Session.get('counter'),0)
    	});
    	it("should increase when clicked", function(){
    		$('button').click();
    		chai.expect(Session.get('counter')).to.be.at.least('');
    	});
    	it("should have a template helper named counter", function(){
    		chai.expect(Template.hello.__helpers[" counter"]).to.exist;
    	});
    });


  });
}
