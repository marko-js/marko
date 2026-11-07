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
const $for_content__$params = ($scope, $params3) => _text($scope["#text/2"], $params3[0]?.label);
const $await_content__selected = /*@__PURE__*/ _closure_get("selected/2", $for_content__selected, 0, "__tests__/template.marko_1_selected#0:1/subscribe");
const $await_content__setup = $await_content__selected;
const $await_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $await_content__$params = ($scope, $params2) => $await_content__for($scope, [$params2[0], "id"]);
const $selected__closure = /*@__PURE__*/ _closure($await_content__selected);
const $selected = /*@__PURE__*/ _let("selected/1", $selected__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul></ul>", " ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$selected($scope, 1);
	$await_promise($scope, resolveAfter([
		{
			id: 1,
			label: "a"
		},
		{
			id: 2,
			label: "b"
		},
		{
			id: 3,
			label: "c"
		}
	]));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
