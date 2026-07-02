// template.marko
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__$global_params_sale = /* @__PURE__ */ _if_closure("#section/4", 0, ($scope) => _text($scope["#text/0"], $scope.$global.params.sale));
const $if_content__setup = $if_content__$global_params_sale;
const $count__OR__$global_params_tag = /* @__PURE__ */ _or(11, ($scope) => _attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot"));
const $count = /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__OR__$global_params_tag($scope);
});
const $if = /* @__PURE__ */ _if("#section/4", "<em>Sale <!>% off</em>", "Db%l", $if_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.title);
	_attr($scope["#a/1"], "href", `/items/${$scope.$global.params.id}`);
	$count($scope, 0);
	$if($scope, $scope.$global.params.sale ? 0 : 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
