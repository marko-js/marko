/*
This module is used to monkey patch `Template.prototype` to add a new `stream(templateData)` method. Since
streaming module is likely not needed in the browser, we have made this method optional.

Template.prototype.stream is always available on the server, but if you need streaming in the browser you must add
the following line to your app:

    require('marko/stream');

*/

require('./runtime/stream');