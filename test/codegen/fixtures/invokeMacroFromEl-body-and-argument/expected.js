function macro_greeting(out, macroInput) {
  out.w("Hello " +
    marko_escapeXml(macroInput.name));
}

macro_greeting(out, {
    renderBody: function renderBody(out) {
      out.w("This is the body passed to the macro");
    }
  });
