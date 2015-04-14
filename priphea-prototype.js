if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var player = AV.Player.fromURL("/07.flac");

  $(document).ready(function() {
    $('#play').on('click', function() {
      player.play();
    });

    $('#pause').on('click', function() {
      player.pause();
    });
  });


  Template.player.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.player.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
