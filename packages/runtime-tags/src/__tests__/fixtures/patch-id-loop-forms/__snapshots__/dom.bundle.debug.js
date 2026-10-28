// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<h1>Fields</h1><!><!><!><!><!><!><!><!><!>";
const $walks = " b%b%b%b%b%b%b%b%c";
const $for_content8__heading = /*@__PURE__*/ _for_closure("#text/8", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content8__setup = ($scope) => {
	$for_content8__heading._($scope);
	$input_uid($scope["#childScope/0"]);
};
const $for_content8__i = ($scope, i) => $input_name($scope["#childScope/0"], i);
const $for_content8__$params = ($scope, $params9) => $for_content8__i($scope, $params9[0]);
const $for_content7__heading = /*@__PURE__*/ _for_closure("#text/7", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content7__setup = ($scope) => {
	$for_content7__heading._($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $for_content6__heading = /*@__PURE__*/ _for_closure("#text/6", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content6__setup = ($scope) => {
	$for_content6__heading._($scope);
	$input_uid($scope["#childScope/0"]);
};
const $for_content6__i = ($scope, i) => $input_name($scope["#childScope/0"], i);
const $for_content6__$params = ($scope, $params7) => $for_content6__i($scope, $params7[0]);
const $for_content5__heading = /*@__PURE__*/ _for_closure("#text/5", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content5__setup = ($scope) => {
	$for_content5__heading._($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $for_content4__heading = /*@__PURE__*/ _for_closure("#text/4", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content4__setup = ($scope) => {
	$for_content4__heading._($scope);
	$input_uid($scope["#childScope/0"]);
};
const $for_content4__value = ($scope, value) => $input_name($scope["#childScope/0"], value);
const $for_content4__$params = ($scope, $params5) => $for_content4__value($scope, $params5[1]);
const $for_content3__heading = /*@__PURE__*/ _for_closure("#text/3", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content3__setup = ($scope) => {
	$for_content3__heading._($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $for_content2__heading = /*@__PURE__*/ _for_closure("#text/2", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content2__setup = ($scope) => {
	$for_content2__heading._($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $for_content__heading = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $for_content__setup = ($scope) => {
	$for_content__heading._($scope);
	$input_uid($scope["#childScope/0"]);
};
const $for_content__item_key = ($scope, item_key) => $input_name($scope["#childScope/0"], item_key);
const $for_content__$params = ($scope, $params2) => $for_content__item_key($scope, $params2[0]?.key);
const $heading = /*@__PURE__*/ _const("heading", ($scope) => _attr($scope["#h1/0"], "id", $scope.heading));
function $setup($scope) {
	$heading($scope, _id($scope));
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content2__setup);
const $input_items = ($scope, input_items) => {
	$for($scope, [input_items]);
	$for2($scope, [input_items, "key"]);
};
const $for3 = /*@__PURE__*/ _for_in("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content3__setup);
const $for4 = /*@__PURE__*/ _for_in("#text/4", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content4__setup, $for_content4__$params);
const $input_record = ($scope, input_record) => {
	$for3($scope, [input_record]);
	$for4($scope, [input_record, (key) => "key-" + key]);
};
const $for5 = /*@__PURE__*/ _for_to("#text/5", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content5__setup);
const $for6 = /*@__PURE__*/ _for_to("#text/6", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content6__setup, $for_content6__$params);
const $for7 = /*@__PURE__*/ _for_until("#text/7", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content7__setup);
const $for8 = /*@__PURE__*/ _for_until("#text/8", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content8__setup, $for_content8__$params);
const $input_end__OR__input_start = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_start", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_end", /*@__PURE__*/ _or(15, ($scope) => {
	$for5($scope, [
		$scope.input_end,
		$scope.input_start,
		1
	]);
	$for6($scope, [
		$scope.input_end,
		$scope.input_start,
		1,
		(i) => "to-" + i
	]);
	$for7($scope, [
		$scope.input_end,
		$scope.input_start,
		2
	]);
	$for8($scope, [
		$scope.input_end,
		$scope.input_start,
		2,
		(i) => "until-" + i
	]);
})));
const $input_end = /*@__PURE__*/ _const("input_end", $input_end__OR__input_start);
const $input_start = /*@__PURE__*/ _const("input_start", $input_end__OR__input_start);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_record($scope, input.record);
	$input_end($scope, input.end);
	$input_start($scope, input.start);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
