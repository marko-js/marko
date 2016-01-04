if (true) {
  if (!(!data.url)) {
    out.w("<a href=\"" +
      data.url +
      "\">");
  }

  out.w("Hello World");

  if (!(!data.url)) {
    out.w("</a>");
  }
}
