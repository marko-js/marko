// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected = /*@__PURE__*/ _closure_get("selected", ($scope) => _attr_class($scope["#li/0"], $scope._._.selected === $scope["#LoopKey"] && "danger"), ($scope) => $scope._._, "__tests__/template.marko_2_selected#4/subscribe");
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected($scope);
	$for_content__setup__script($scope);
};
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/2"], row_label);
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $if_content__rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $if_content__setup = $if_content__rows;
const $selected__closure = /*@__PURE__*/ _closure($for_content__selected);
const $selected = /*@__PURE__*/ _let("selected/4", $selected__closure);
const $rows = /*@__PURE__*/ _let("rows/5");
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
}
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
