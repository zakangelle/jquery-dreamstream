var DreamStream = require('./lib/DreamStream.js');

module.exports = function($) {
  $.fn.dreamStream = function(options) {
    return this.each(function() {
      var dreamStream = new DreamStream($(this), options);
      dreamStream.start();
    });
  };
};
