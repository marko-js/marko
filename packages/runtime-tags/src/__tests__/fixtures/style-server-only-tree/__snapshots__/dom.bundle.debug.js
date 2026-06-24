// child.marko
const $template$1 = "<div class=child>Child</div>";
const $walks$1 = "b";
const $setup$1 = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div class=page>Page</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// page.css
var page_default = ".page-global {\n  margin: 0;\n}\n";

// child.css
var child_default = ".child-global {\n  padding: 0;\n}\n";

// v:child.marko.css
var v_child_marko_default = "\n  .child {\n    color: blue;\n  }\n";

// v:template.marko.css
var v_template_marko_default = "\n  .page {\n    color: red;\n  }\n";

// template.style.css
var template_style_default = ".page-colocated {\n  font-weight: bold;\n}\n";
