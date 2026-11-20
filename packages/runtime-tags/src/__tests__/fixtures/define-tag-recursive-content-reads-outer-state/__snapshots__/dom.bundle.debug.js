// template.marko
const $Rec_content__walks = " D l%b%c";
const $Rec_content__template = "<button> </button><!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Rec_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Rec_content__walks);
const $Rec_content2__label = /*@__PURE__*/ _closure_get("label/12", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_4_label#1:9/subscribe");
const $Rec_content2__setup = $Rec_content2__label;
const $Rec_content2 = _content_resume("__tests__/template.marko_4*content", "<em>held <!></em>", "Db%", $Rec_content2__setup);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.content));
const $if_content2__setup = $if_content2__content;
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $Rec_content__depth($scope["#childScope/0"], $scope._.depth + 1));
const $if_content__setup = ($scope) => {
	$if_content__depth._($scope);
	$Rec_content__setup($scope["#childScope/0"]);
	$Rec_content__tag_input_content($scope["#childScope/0"], $Rec_content2($scope));
};
const $Rec_content__label__closure = /*@__PURE__*/ _closure($Rec_content2__label);
const $Rec_content__label = /*@__PURE__*/ _const("label", $Rec_content__label__closure);
const $Rec_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content2__setup);
const $Rec_content__shown = /*@__PURE__*/ _let("shown/8", ($scope) => {
	$Rec_content__label($scope, $scope.shown ? "on" : "off");
	$Rec_content__if($scope, $scope.shown ? 0 : 1);
});
const $Rec_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Rec_content__shown($scope, !$scope.shown);
}));
const $Rec_content__setup = ($scope) => {
	$Rec_content__shown($scope, false);
	$Rec_content__setup__script($scope);
};
const $Rec_content__if2 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Rec_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Rec_content__walks), $if_content__setup);
const $Rec_content__depth = /*@__PURE__*/ _const("depth", ($scope) => {
	_text($scope["#text/1"], $scope.depth);
	$Rec_content__if2($scope, $scope.depth < 1 ? 0 : 1);
	$if_content__depth($scope);
});
const $Rec_content__tag_input_content = /*@__PURE__*/ _const("content", $if_content2__content);
const $Rec_content__$params = ($scope, $params2) => $Rec_content__$temp($scope, $params2[0]);
const $Rec_content__$temp = ($scope, $temp) => {
	$Rec_content__depth($scope, $temp.depth);
	$Rec_content__tag_input_content($scope, $temp.content);
};
function $setup($scope) {
	$Rec_content__setup($scope["#childScope/0"]);
	$Rec_content__depth($scope["#childScope/0"], 0);
	$Rec_content__tag_input_content($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
