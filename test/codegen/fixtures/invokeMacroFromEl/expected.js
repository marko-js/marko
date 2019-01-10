function macro_greeting(out, macroInput) {
  out.w("Hello " +
    marko_escapeXml(macroInput.name));
}

macro_greeting(out, {
    name: "Frank",
    age: 10
  });
