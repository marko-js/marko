// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content2__count = /*@__PURE__*/ _resume_init("__tests__/template.marko_2_count/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.count)));
const $if_content2__setup = $if_content2__count;
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<p>Seen <!></p>", "Db%", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if_content__count = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "count/2", $if_content2__count);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__count($scope, $scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_inner._($scope);
	$if_content__count($scope, 0);
	$if_content__setup__script($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<button>+</button><!><!>", " b%", $if_content__setup);
const $input_outer = ($scope, input_outer) => $if($scope, input_outer ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_outer($scope, input.outer);
	$input_inner($scope, input.inner);
};
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
