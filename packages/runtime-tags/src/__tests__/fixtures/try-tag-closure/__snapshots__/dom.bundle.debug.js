// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $try_content__value = /* @__PURE__ */ _closure_get("value", ($scope) => _text($scope["#text/0"], $scope._.value));
const $try_content__setup = $try_content__value;
const $value = /* @__PURE__ */ _const("value");
const $try = /* @__PURE__ */ _try("#text/0", " ", " b", $try_content__setup);
function $setup($scope) {
	$value($scope, "Hello");
	$try($scope, {});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
