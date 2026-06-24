// v:template.marko.hydrate-6.js
const $template = "<button id=tags>Tags <!></button><!><!>";
const $walks = " Db%l%c";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const _template2 = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
