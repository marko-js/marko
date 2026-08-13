// template.marko
const $template = "<ul><!></ul><button>inc</button>";
const $walks = "D%l b";
const $forawait_content__clicks = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/2"], $scope._.clicks));
const $forawait_content__setup = ($scope) => {
	$forawait_content__clicks._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $forawait_content__item = ($scope, item) => _text($scope["#text/1"], item);
const $forawait_content__$params = ($scope, $params2) => $forawait_content__item($scope, $params2[0]);
const $clicks = /*@__PURE__*/ _let("clicks/5", $forawait_content__clicks);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$setup__script($scope);
}
const $for_await = /*@__PURE__*/ _for_await("#text/0", "<li><!>: <!> (<!>)</li>", "D%c%c%", $forawait_content__setup, $forawait_content__$params);
const $input_items = ($scope, input_items) => $for_await($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
