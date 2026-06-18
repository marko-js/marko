// template.marko
const $Child_content2__walks = " b", $Child_content2__template = "<div></div>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Child_content2__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Child_content2__walks);
const $Child_content2__input__script = _script("__tests__/template.marko_3_input", ($scope) => _attrs_script($scope, "#div/0"));
const $Child_content2__input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$Child_content2__input__script($scope);
});
const $Child_content2__$params = ($scope, $params2) => $Child_content2__input($scope, $params2[0]);
const $if_content__value_class = /* @__PURE__ */ _closure_get("value_class", ($scope) => _attr_class($scope["#span/0"], $scope._._.value_class), ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__value_class($scope);
	$if_content__text($scope);
};
const $if_content__text = /* @__PURE__ */ _closure_get("text", ($scope) => _text($scope["#text/1"], $scope._._.text), ($scope) => $scope._._);
const $Child_content__if = /* @__PURE__ */ _if("#text/0", "<span> </span>", " D l", $if_content__setup);
const $Child_content__value = /* @__PURE__ */ _closure_get("value", ($scope) => $Child_content__if($scope, $scope._.value ? 0 : 1));
const $Child_content__setup = $Child_content__value;
const $Child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<!><!><!>", "b%c", $Child_content__setup);
const $value = /* @__PURE__ */ _const("value", ($scope) => {
	$value_class($scope, $scope.value?.class);
	$text($scope, $scope.value?.text);
});
const $value_class = /* @__PURE__ */ _const("value_class");
const $text = /* @__PURE__ */ _const("text");
function $setup($scope) {
	$Child_content2__input($scope["#childScope/0"], { content: $Child_content($scope) });
	$value($scope, undefined);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
