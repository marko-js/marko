// template.marko
const $template = "<button class=inc></button><button class=toggle></button><!><!>";
const $walks = " b b%c";
const $if_content__count = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $if = /* @__PURE__ */ _if("#text/2", "<span> </span>", "D l", $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	$if_content__count($scope);
	$count__script($scope);
});
function $setup($scope) {
	$show($scope, true);
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
