// template.marko
const $Card_content__walks = " D l%b%c";
const $Card_content__template = "<button> </button><!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $Card_content3__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_5_input_label#0:3/subscribe");
const $Card_content3__setup = $Card_content3__input_label;
const $Card_content3 = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "<strong> </strong>", "D ", $Card_content3__setup);
const $if_content2__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Card_content__setup($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $Card_content3($scope));
	$Card_content__tag_input_n($scope["#childScope/0"], 2);
};
const $Card_content2__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_3_input_label#0:3/subscribe");
const $Card_content2__setup = $Card_content2__input_label;
const $Card_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<em> </em>", "D ", $Card_content2__setup);
const $if_content__n = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $Card_content__tag_input_n($scope["#childScope/0"], $scope._.n - 1));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$scope["#childScope/0"]._ = $scope._._;
	$Card_content__setup($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $Card_content2($scope));
};
const $Card_content__x = /*@__PURE__*/ _let("x/8", ($scope) => _text($scope["#text/1"], $scope.x));
const $Card_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Card_content__x($scope, +$scope.x + 1);
}));
const $Card_content__setup = ($scope) => {
	$Card_content__x($scope, 0);
	$Card_content__setup__script($scope);
};
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Card_content__content = $Card_content__dynamicTag;
const $Card_content__if = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks), $if_content__setup);
const $Card_content__tag_input_n = /*@__PURE__*/ _const("n", ($scope) => {
	$Card_content__if($scope, $scope.n ? 0 : 1);
	$if_content__n($scope);
});
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => {
	$Card_content__tag_input_n($scope, $temp.n);
	$Card_content__content($scope, $temp.content);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks), $if_content2__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Card_content2__input_label, $Card_content3__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
