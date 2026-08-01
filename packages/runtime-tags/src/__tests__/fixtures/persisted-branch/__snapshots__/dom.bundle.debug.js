// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
const $if_content__input_promo = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_promo));
const $if_content__setup = $if_content__input_promo;
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<aside> </aside>", "D ", $if_content__setup);
const $input_promo = /*@__PURE__*/ _const("input_promo", ($scope) => {
	$if($scope, $scope.input_promo ? 0 : 1);
	$if_content__input_promo($scope);
});
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_promo($scope, input.promo);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
