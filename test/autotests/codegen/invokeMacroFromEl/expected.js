function macro_greeting(name, age, out, renderBody) {
  out.w("Hello " +
    marko_escapeXml(name));
}

macro_greeting("Frank", 10, out);
