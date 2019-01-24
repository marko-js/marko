function macro_greeting(out, macroInput) {
  out.w("Hello " +
    marko_escapeXml(macroInput.name));
}