// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $if_content__value = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $await_content__if = /* @__PURE__ */ _if("#text/2", "<span> </span>", "D l", $if_content__setup);
const $await_content__value__script = _script("__tests__/template.marko_3_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__value($scope, $scope.value + 1);
}));
const $await_content__value = /* @__PURE__ */ _let("value/3", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$await_content__if($scope, $scope.value > 0 ? 0 : 1);
	$if_content__value($scope);
	$await_content__value__script($scope);
});
const $await_content__setup = ($scope) => $await_content__value($scope, 1);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading...", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<button> </button><!><!>", " D l%c", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
