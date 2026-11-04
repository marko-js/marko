// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/label.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$1 = ($scope, input) => $get$1($scope, input.get);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__item_label = /*@__PURE__*/ _const("item_label", ($scope) => $get$1($scope["#childScope/0"], $get($scope)));
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
const $get = ($scope) => function() {
	return $scope.item_label;
};
_bind_resume("__tests__/template.marko_1/get item_label", $get);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
