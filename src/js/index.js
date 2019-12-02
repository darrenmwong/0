import $ from 'jquery';
window.$ = window.jQuery = $; // Making these bad boys global so we dont require them anywhere else

import Example from './components/_Example.js';

(function($) {

  var App =  {
    init: function() {
        Example();
    }
  }

  $(document).ready(function() { App.init(); });
})(jQuery);
