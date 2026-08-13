// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $forawait_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $forawait_content__$params = ($scope, $params2) => $forawait_content__item($scope, $params2[0]);
const $for_await = /*@__PURE__*/ _for_await("#text/0", " ", " ", 0, $forawait_content__$params);
function $setup($scope) {
	$for_await($scope, [["a", "b"]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
