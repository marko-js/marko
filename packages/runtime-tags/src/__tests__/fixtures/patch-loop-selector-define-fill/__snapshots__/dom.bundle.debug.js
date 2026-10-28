// template.marko
const $List_content__walks = " b b";
const $List_content__template = "<ul></ul><button class=add>+</button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=toggle>toggle</button>`)($List_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($List_content__walks);
const $for_content__selected__OR__flag__script = _script("__tests__/template.marko_2_selected#1:4_flag#1:5", ($scope) => _el_read($scope["#li/0"]).className = $scope._.flag && $scope._.selected === $scope["#LoopKey"] ? "sel" : "");
const $for_content__selected__OR__flag = /*@__PURE__*/ _fill_join_for("__tests__/template.marko_fill0", "selected", /*@__PURE__*/ _or(2, $for_content__selected__OR__flag__script), "#ul/0");
const $for_content__selected = /*@__PURE__*/ _for_closure("#ul/0", $for_content__selected__OR__flag);
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__flag._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__flag = /*@__PURE__*/ _for_closure("#ul/0", $for_content__selected__OR__flag);
const $List_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", " D ", $for_content__setup);
const $List_content__rows = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "rows/6", ($scope) => $List_content__for($scope, [$scope.rows, "id"]));
const $List_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$List_content__rows($scope, [...$scope.rows, { id: $scope.rows.length + 1 }]);
}));
const $List_content__setup = ($scope) => {
	$List_content__rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
	$List_content__setup__script($scope);
};
const $List_content__tag_input_selected = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "selected", $for_content__selected);
const $List_content__tag_input_flag = /*@__PURE__*/ _const("flag", $for_content__flag);
const $List_content__$params = ($scope, $params2) => $List_content__$temp($scope, $params2[0]);
const $List_content__$temp = ($scope, $temp) => {
	$List_content__tag_input_flag($scope, $temp.flag);
	$List_content__tag_input_selected($scope, $temp.selected);
};
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $List_content__tag_input_flag($scope["#childScope/0"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$List_content__setup($scope["#childScope/0"]);
	$on($scope, true);
	$setup__script($scope);
}
const $input_sel = ($scope, input_sel) => $List_content__tag_input_selected($scope["#childScope/0"], input_sel);
const $input = ($scope, input) => $input_sel($scope, input.sel);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
