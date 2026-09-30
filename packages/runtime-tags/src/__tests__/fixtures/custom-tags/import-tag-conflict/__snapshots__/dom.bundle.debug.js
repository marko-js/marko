// asset1.ts
const asset$1 = "a";

// asset2.ts
const asset = "b";

// template.marko
const $template = "<!> <!>";
const $walks = "%c%b";
function $setup($scope) {
	_text($scope["#text/0"], "a");
	_text($scope["#text/1"], "b");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
