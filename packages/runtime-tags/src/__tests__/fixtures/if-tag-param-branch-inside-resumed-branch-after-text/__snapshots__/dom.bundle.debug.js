// template.marko
const $template = "<p>Count: <!></p><button id=inc>inc</button><button id=toggle>toggle</button>";
const $walks = "Db%l b b";
const $if_content2__count = /*@__PURE__*/ _closure_get("count/9", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#0:7/subscribe");
const $if_content2__setup = $if_content2__count;
const $if_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content2__setup);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_b ? 0 : 1));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $a = /*@__PURE__*/ _let("a/6", ($scope) => $if($scope, $scope.a ? 0 : 1));
const $count__closure = /*@__PURE__*/ _closure($if_content2__count);
const $count = /*@__PURE__*/ _let("count/7", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$a($scope, !$scope.a);
	});
});
function $setup($scope) {
	$a($scope, true);
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_b($scope, input.b);
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
