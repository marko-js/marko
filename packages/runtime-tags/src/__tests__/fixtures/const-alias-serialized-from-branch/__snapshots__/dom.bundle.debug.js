// template.marko
const $template = "<!><!><button class=set></button>";
const $walks = "b%b b";
const $if_content__a__script = _script("__tests__/template.marko_1_a#0:3", ($scope) => _on($scope["#button/0"], "click", function() {
	document.body.dataset.a = String($scope._.a);
}));
const $if_content__a = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/1"], $scope._.a);
	$if_content__a__script($scope);
});
const $if_content__setup = $if_content__a;
const $if = /*@__PURE__*/ _if("#text/0", "<button class=read> </button>", " D ", $if_content__setup);
const $obj = /*@__PURE__*/ _let("obj/2", ($scope) => {
	$a($scope, $scope.obj?.a);
	$if($scope, $scope.obj ? 0 : 1);
});
const $a = /*@__PURE__*/ _const("a", $if_content__a);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$obj($scope, { a: 1 });
}));
function $setup($scope) {
	$obj($scope, undefined);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
