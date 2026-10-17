// template.marko
const $template = "<button class=bad>bad</button><button class=next>next</button><ul><li>head</li><!></ul>";
const $walks = " b bDb%l";
const $if_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("row setup");
})());
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup);
const $for_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope["#LoopKey"]);
	$for_content__if($scope, $scope["#LoopKey"] === 4 ? 0 : 1);
};
const $for = /*@__PURE__*/ _for_of("#text/2", "<li> </li><!><!>", "D l%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items, (i) => i]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$items($scope, [4, 9]);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, [7]);
	});
});
function $setup($scope) {
	$items($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
