if (Meteor.isClient) {
  // counter starts at 0
  famous.polyfills;
  famous.core.famous;

  var mainContext = famous.core.Engine.createContext();
  var renderController = new famous.views.RenderController();
  var Surface = require('famous/core/Surface');

  var firstSurface = new Surface({
    size: [200, 200],
    properties: {
      backgroundColor: 'rgb(240, 238, 233)',
      textAlign: 'center',
      padding: '5px',
      border: '2px solid rgb(210, 208, 203)',
      marginTop: '50px',
      marginLeft: '50px',
    }
  });


  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    scrollView: function(){
      firstSurface.setContent(Session.get('counter'));
      mainContext.add(firstSurface);
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}