 $rtmpl("simple", function (templating) {
     var empty = templating.e,
         notEmpty = templating.ne,
         forEach = templating.f;
     return function (data, context) {
         var write = context.w,
             rootClass = data.rootClass,
             colors = data.colors,
             message = data.message;
         write('<div class="hello-world ', rootClass, '">', message, '</div>');
         if (notEmpty(colors)) {
             write('<ul>');
             forEach(colors, function (color) {
                 write('<li class="color">', color, '</li>');
             });
             write('</ul>');
         }
         if (empty(colors)) {
             write('<div>No colors!</div>');
         }
     }
 });