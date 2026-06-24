// foo.ts
var foo_default = 1;

// bar.ts
const b = "b";

// tags/baz.marko
const $template$1 = "<div></div>";
const $walks$1 = "b";
const $setup$1 = () => {};
var baz_default = /*@__PURE__*/ _template("__tests__/tags/baz.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%b`)("b", "b", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	_text($scope["#text/3"], "b");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
