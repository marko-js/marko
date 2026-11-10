// tags/child.marko
const $R_content__walks = "b%b%c";
const $R_content__template = "<!><!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($R_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($R_content__walks);
const $if_content3__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$R_content__flip($scope["#childScope/0"], true);
	$R_content__tag_input_depth($scope["#childScope/0"], 1);
};
const $if_content2__flip = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_3_flip#1:4/setup", "#text/1", 0, ($scope) => $R_content__flip($scope["#childScope/0"], !$scope._.flip));
const $if_content2__setup = ($scope) => {
	$if_content2__flip._($scope);
	$if_content2__depth._($scope);
	$scope["#childScope/0"]._ = $scope._._;
};
const $if_content2__depth = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_3_depth#1:5/setup", "#text/1", 0, ($scope) => $R_content__tag_input_depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__input_v = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_2_input_v#0:4/subscribe", "input_v/6", ($scope) => _text($scope["#text/0"], $scope._._.input_v), ($scope) => $scope._._, "__tests__/tags/child.marko_0_input_v#4/subscribers", 0);
const $if_content__setup = $if_content__input_v;
const $R_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $R_content__flip = /*@__PURE__*/ _const("flip", ($scope) => {
	$R_content__if($scope, $scope.flip ? 0 : 1);
	$if_content2__flip($scope);
});
const $R_content__if2 = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks), $if_content2__setup);
const $R_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$R_content__if2($scope, $scope.depth ? 0 : 1);
	$if_content2__depth($scope);
});
const $R_content__$params = ($scope, $params2) => $R_content__$temp($scope, $params2[0]);
const $R_content__$temp = ($scope, $temp) => {
	$R_content__flip($scope, $temp.flip);
	$R_content__tag_input_depth($scope, $temp.depth);
};
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$R_content__tag_input_depth($scope["#childScope/0"], 2);
	$R_content__flip($scope["#childScope/0"]);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks), $if_content3__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_v$1($scope, input.v);
	$input_on($scope, input.on);
};
const $input_v__closure = /*@__PURE__*/ _closure($if_content__input_v);
const $input_v$1 = /*@__PURE__*/ _const("input_v", $input_v__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $on = _let("on/5", ($scope) => $input_on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$on($scope, true);
	$setup__script($scope);
}
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/1"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
