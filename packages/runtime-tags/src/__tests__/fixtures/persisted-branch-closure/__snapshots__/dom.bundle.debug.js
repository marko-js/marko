// template.marko
const $template = "<main><h1> </h1><!><button>+</button></main>";
const $walks = "E l%b l";
const $if_content__count = /*@__PURE__*/ _resume_init("__tests__/template.marko_1_count/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.count)));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let("count/7", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p>Seen <!></p>", "Db%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
