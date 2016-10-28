'use strict';
/*
This module is used to monkey patch `Template.prototype` to add a new `stream(templateData)` method. Since
this module is likely not needed in the browser, we have split out the code into a separate module. This module
is always loaded on the server, but if you need streaming in the browser you must add the following
line to your app:

    require('marko/stream');

*/
var stream = require('stream');
var asyncWriter = require('async-writer');

function Readable(template, data, options) {
   Readable.$super.call(this);
   this._t = template;
   this._d = data;
   this._options = options;
   this._rendered = false;
}

Readable.prototype = {
   write: function(data) {
       if (data != null) {
           this.push(data);
       }
   },
   end: function() {
       this.push(null);
   },
   _read: function() {
       if (this._rendered) {
           return;
       }

       this._rendered = true;

       var template = this._t;
       var data = this._d;

       var out = asyncWriter.create(this, this._options);
       template.render(data, out);
       out.end();
   }
};

require('raptor-util/inherit')(Readable, stream.Readable);

require('./html').Template.prototype.stream = function(data) {
    return new Readable(this, data, this._options);
};