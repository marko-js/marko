function macro_greeting(name, age, out, renderBody) {
  out.w("Hello " +
    escapeXml(name));
}

macro_greeting("Frank", 10, out, function renderBody(out) {
  out.w("This is the body passed to the macro");
});
