/*
   @https://github.com/jakemadness/animate-numbers
*/
var numberFormat = function(number) {
   number = String(number);
   return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var animateNumber = function(elementId) {
   var self          = this;
   self.element      = document.getElementById(elementId);
   self.number       = Number(self.element.getAttribute('data-number'));
   self.duration     = Number(self.element.getAttribute('data-duration'));
   self.updateRate   = 1000 / 60;
   self.totalUpdates = Math.ceil(self.duration / self.updateRate);
   self.updates      = 0;
   self.update       = function() {
      self.element.innerText = numberFormat(Math.round(self.number / self.totalUpdates * self.updates));
      if ( self.updates < self.totalUpdates ) {
         ++self.updates;
         setTimeout(self.update, self.updateRate);
      }
   };
   self.update();
};
