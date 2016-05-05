function macro_greeting(name, age, out, renderBody) {
  out.w("Hello " +
    escapeXml(name));
}