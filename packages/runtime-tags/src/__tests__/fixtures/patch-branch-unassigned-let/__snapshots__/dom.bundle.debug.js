// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__seen = /*@__PURE__*/ _let("seen/1", ($scope) => _text($scope["#text/0"], $scope.seen));
const $if_content__count = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_count#5/init", "#text/0", 0, ($scope) => $if_content__seen($scope, $scope._.count + 1));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let("count/5", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p>Seen <!></p>", "Db%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
