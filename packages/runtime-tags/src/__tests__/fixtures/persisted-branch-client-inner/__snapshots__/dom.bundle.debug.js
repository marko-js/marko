// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._._.input_title), ($scope) => $scope._._), _closure);
const $if_content2__setup = $if_content2__input_title;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.count > 1 ? 0 : 1));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
