// template.marko
const $template = "<button></button>";
const $walks = " b";
let sideEffect = 3;
const $MyThing_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $MyThing_content__setup = ($scope) => {
	$MyThing_content__count($scope);
	_text($scope["#text/1"], sideEffect++);
};
const $MyThing_content = _content_resume("__tests__/template.marko_1_content", "<!> <!>", "%c%b", $MyThing_content__setup);
const $count__OR__MyThing = /*@__PURE__*/ _or(3, ($scope) => _attr_content($scope, "#button/0", ($scope.count, $scope.MyThing)));
const $count__closure = /*@__PURE__*/ _closure($MyThing_content__count);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$count__OR__MyThing($scope);
	$count__closure($scope);
	$count__script($scope);
});
const $MyThing = /*@__PURE__*/ _const("MyThing", $count__OR__MyThing);
function $setup($scope) {
	$count($scope, 0);
	$MyThing($scope, { content: $MyThing_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
