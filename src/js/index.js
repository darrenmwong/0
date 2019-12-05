import $ from 'jquery';
window.$ = window.jQuery = $; // Making these bad boys global so we dont require them anywhere else

import Nav from './components/_Nav.js';

(function($) {

  var App =  {
    init: function() {
        Nav();
    }
  }

  $(document).ready(function() { App.init(); });
})(jQuery);
