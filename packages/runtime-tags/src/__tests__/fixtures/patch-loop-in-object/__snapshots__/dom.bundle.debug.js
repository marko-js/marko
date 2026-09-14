// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/2"], $scope._.input_note)));
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for = /*@__PURE__*/ _for_in("#ul/0", "<li><!>=<!> (<!>)</li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $pairs = /*@__PURE__*/ _let("pairs/5", ($scope) => $for($scope, [$scope.pairs]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$pairs($scope, {
		...$scope.pairs,
		["k" + Object.keys($scope.pairs).length]: 2
	});
}));
function $setup($scope) {
	$pairs($scope, { a: 1 });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
