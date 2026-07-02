// template.marko
const $template = "<div></div><button> </button><!><!>";
const $walks = " b D l%c";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope._["#div/0"]).textContent = "Hit");
const $if_content__setup = $if_content__setup__script;
const $if = /* @__PURE__ */ _if("#text/3", 0, 0, $if_content__setup);
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if($scope, !$scope.count ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
