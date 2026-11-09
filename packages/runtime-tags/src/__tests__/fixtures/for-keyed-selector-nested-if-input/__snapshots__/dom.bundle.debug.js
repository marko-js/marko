// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", ($scope) => _attr_class_item($scope["#li/0"], "danger", $scope._._.selected === $scope["#LoopKey"]), ($scope) => $scope._);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]?.label);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $if_content__input_rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.input_rows, "id"]));
const $if_content__setup = ($scope) => {
	$if_content__input_rows._($scope);
	$if_content__selected._($scope);
};
const $if_content__selected = /*@__PURE__*/ _if_closure("#text/0", 0, $for_content__selected);
const $selected = /*@__PURE__*/ _let("selected/5", $if_content__selected);
function $setup($scope) {
	$selected($scope, 1);
}
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_rows($scope, input.rows);
};
const $input_rows = /*@__PURE__*/ _const("input_rows", $if_content__input_rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
