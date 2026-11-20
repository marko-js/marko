// template.marko
const $Rec_content__walks = "b%b%c";
const $Rec_content__template = "<!><!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($Rec_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($Rec_content__walks);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__input_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.input_content));
const $if_content2__setup = $if_content2__input_content;
const $Rec_content2__label = /*@__PURE__*/ _closure_get("label/5", ($scope) => _text($scope["#text/0"], $scope._._._.label), ($scope) => $scope._._._, "__tests__/template.marko_3_label#0:3/subscribe");
const $Rec_content2__setup = $Rec_content2__label;
const $Rec_content2 = _content_resume("__tests__/template.marko_3*content", "<em>held <!></em>", "Db%", $Rec_content2__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Rec_content__tag_input_depth($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$scope["#childScope/0"]._ = $scope._._;
	$Rec_content__setup($scope["#childScope/0"]);
	$Rec_content__tag_input_content($scope["#childScope/0"], $Rec_content2($scope));
};
const $Rec_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $Rec_content__shown = /*@__PURE__*/ _closure_get("shown/4", ($scope) => $Rec_content__if($scope, $scope._.shown ? 0 : 1), 0, "__tests__/template.marko_1_shown#0:2/subscribe");
const $Rec_content__setup = $Rec_content__shown;
const $Rec_content__tag_input_content = /*@__PURE__*/ _const("input_content", $if_content2__input_content);
const $Rec_content__if2 = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Rec_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Rec_content__walks), $if_content__setup);
const $Rec_content__tag_input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$Rec_content__if2($scope, $scope.input_depth < 1 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $Rec_content__$params = ($scope, $params2) => $Rec_content__input($scope, $params2[0]);
const $Rec_content__input = ($scope, input) => {
	$Rec_content__tag_input_content($scope, input.content);
	$Rec_content__tag_input_depth($scope, input.depth);
};
const $label__closure = /*@__PURE__*/ _closure($Rec_content2__label);
const $label = /*@__PURE__*/ _const("label", $label__closure);
const $shown__closure = /*@__PURE__*/ _closure($Rec_content__shown);
const $shown = /*@__PURE__*/ _let("shown/2", ($scope) => {
	$label($scope, $scope.shown ? "on" : "off");
	$shown__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, !$scope.shown);
}));
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$Rec_content__setup($scope["#childScope/1"]);
	$Rec_content__tag_input_depth($scope["#childScope/1"], 0);
	$Rec_content__tag_input_content($scope["#childScope/1"]);
	$shown($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
