// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item ? `${_to_text(item)}` : "");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of$1("#text/0", "<div> </div>", "D l", 0, $for_content__$params);
function $setup($scope) {
	$for($scope, [[
		"a",
		"b",
		"c"
	]]);
}
var template_default = /*@__PURE__*/ _template$1("__tests__/template.marko", $template, "b%c", $setup);
