// template.marko
const $Wrap_content2__walks = "D lD%l";
const $Wrap_content2__template = "<p> </p><div><!></div>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $Wrap_content2__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_count#0:6/init", /*@__PURE__*/ _closure_get("count/8", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_3_count#0:6/subscribe"));
const $Wrap_content2__setup = $Wrap_content2__count;
const $Wrap_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Wrap_content2__content = $Wrap_content2__dynamicTag;
const $Wrap_content2__$params = ($scope, $params2) => $Wrap_content2__$temp($scope, $params2[0]);
const $Wrap_content2__$temp = ($scope, $temp) => $Wrap_content2__content($scope, $temp.content);
const $Wrap_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $Wrap_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope._, +$scope._.n + 1);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__input_label($scope);
	$Wrap_content__n($scope);
	$Wrap_content__setup__script($scope);
};
const $Wrap_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_n#1:1/init", /*@__PURE__*/ _closure_get("n/9", ($scope) => _text($scope["#text/2"], $scope._.n)));
const $Wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<button><!>:<!></button>", " D%c%", $Wrap_content__setup);
const $if_content__n__closure = /*@__PURE__*/ _closure($Wrap_content__n);
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/1", $if_content__n__closure);
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Wrap_content2__setup($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $Wrap_content($scope));
	$if_content__n($scope, 0);
};
const $count__closure = /*@__PURE__*/ _closure($Wrap_content2__count);
const $count = _let("count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Wrap_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
