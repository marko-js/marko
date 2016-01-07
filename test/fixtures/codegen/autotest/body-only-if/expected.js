if (true) {
  if (!(!data.url)) {
    out.w("<a" +
      attr("href", data.url) +
      ">");
  }

  out.w("Hello World");

  if (!(!data.url)) {
    out.w("</a>");
  }
}
