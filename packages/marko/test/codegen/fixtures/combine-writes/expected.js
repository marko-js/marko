out.w("<ul>");

forEach(data.colors, function(color) {
  foo();

  out.w("<li>" +
    marko_escapeXml(color) +
    "</li>");

  bar();
});

out.w("</ul>");
