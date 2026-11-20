// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D 0&l%c";
const $if_content__doubled = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => _text($scope["#text/0"], $scope._.doubled));
const $if_content__setup = $if_content__doubled;
const $Double_content__count = /*@__PURE__*/ _closure_get("count/7", ($scope) => _return($scope, $scope._.count * 2), 0, "__tests__/template.marko_1_count#0:5/subscribe");
const $Double_content__setup = $Double_content__count;
const $if = /*@__PURE__*/ _if("#text/4", "<em> </em>", "D ", $if_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Double_content__count);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/2"]._ = $scope;
	$Double_content__setup($scope["#childScope/2"]);
	_var($scope, "#childScope/2", $doubled);
	$count($scope, 0);
	$setup__script($scope);
}
const $doubled = _var_resume("__tests__/template.marko_0_doubled#6/var", /*@__PURE__*/ _const("doubled", $if_content__doubled));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
