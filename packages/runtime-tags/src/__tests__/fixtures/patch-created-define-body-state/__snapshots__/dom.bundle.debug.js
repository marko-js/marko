// template.marko
const $Info_content__walks = "D%c%l";
const $Info_content__template = "<p><!>:<!></p>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $Info_content__count = /*@__PURE__*/ _shell_init("__tests__/template.marko_2_count#0:6/init", /*@__PURE__*/ _closure_get("count/8", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_2_count#0:6/subscribe"));
const $Info_content__setup = $Info_content__count;
const $Info_content__id = ($scope, id) => _text($scope["#text/0"], id);
const $Info_content__$params = ($scope, $params2) => $Info_content__$temp($scope, $params2[0]);
const $Info_content__$temp = ($scope, $temp) => $Info_content__id($scope, $temp.id);
const $if_content__input_id = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Info_content__id($scope["#childScope/0"], $scope._.input_id)));
const $if_content__setup = ($scope) => {
	$if_content__input_id._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $count__closure = /*@__PURE__*/ _closure($Info_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_id($scope, input.id);
};
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", $if_content__input_id);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
