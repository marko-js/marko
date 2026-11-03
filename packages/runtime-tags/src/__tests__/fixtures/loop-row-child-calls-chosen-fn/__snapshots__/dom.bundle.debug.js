// tags/label-view.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/label-view.marko_0_input#2", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.input.get();
	console.log("run", $scope.input.get());
});
const $input$1 = /*@__PURE__*/ _const("input", $input__script);
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<!><!><button>noop</button>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__up__OR__low__OR__item_upper = /*@__PURE__*/ _or(4, ($scope) => $input$1($scope["#childScope/0"], { get: $scope.item_upper ? $scope._.up : $scope._.low }), 2);
const $for_content__up = /*@__PURE__*/ _for_closure("#text/0", $for_content__up__OR__low__OR__item_upper);
const $for_content__setup = ($scope) => {
	$for_content__up._($scope);
	$for_content__low._($scope);
};
const $for_content__low = /*@__PURE__*/ _for_closure("#text/0", $for_content__up__OR__low__OR__item_upper);
const $for_content__item_upper = /*@__PURE__*/ _const("item_upper", $for_content__up__OR__low__OR__item_upper);
const $for_content__$params = ($scope, $params2) => $for_content__item_upper($scope, $params2[0]?.upper);
const $up2 = /*@__PURE__*/ _const("up", $for_content__up);
const $low2 = /*@__PURE__*/ _const("low", $for_content__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
};
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/up"] = $up;
_resumed["__tests__/template.marko_0/low"] = $low;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
