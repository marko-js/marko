// template.marko
const $template = "<button> </button><!><!><!>";
const $walks = " D l%b%c";
const $if_content__value = /* @__PURE__ */ _if_closure("#text/3", 0, ($scope) => _text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if = /* @__PURE__ */ _if("#text/3", "<span> </span>", "D l", $if_content__setup);
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/4", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$if($scope, $scope.value ? 0 : 1);
	$if_content__value($scope);
	$value__script($scope);
});
const $await_content = /* @__PURE__ */ _await_content("#text/2", "<span>Hello</span>", "b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/2");
function $setup($scope) {
	$await_content($scope);
	$value($scope, 1);
	$await_promise($scope, resolveAfter(0, 4));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
