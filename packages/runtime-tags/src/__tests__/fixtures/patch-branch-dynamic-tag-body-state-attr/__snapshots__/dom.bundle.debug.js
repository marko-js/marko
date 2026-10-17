// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $inputtag_content__count = /*@__PURE__*/ _shell_init("__tests__/template.marko_2_count#0:6/init", /*@__PURE__*/ _closure_get("count/8", ($scope) => _attr($scope["#span/0"], "data-n", $scope._._.count), ($scope) => $scope._._));
const $inputtag_content__setup = $inputtag_content__count;
const $inputtag_content = _content("__tests__/template.marko_2*content", "<span>x</span>", " ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $if_content__input_tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_tag)));
const $if_content__setup = $if_content__input_tag;
const $count__closure = /*@__PURE__*/ _closure($inputtag_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_tag($scope, input.tag);
};
const $input_tag = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_tag", $if_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
