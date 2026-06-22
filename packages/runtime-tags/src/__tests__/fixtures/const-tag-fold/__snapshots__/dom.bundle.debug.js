// template.marko
const $template = "<button>+2</button><div class=step>step: <!> / <!></div><pre><!> 18446744073709551616 Infinity <!></pre>";
const $walks = " b Db%c%lD%e%l";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 2);
}));
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	_text($scope["#text/5"], void 0 ?? $scope.count);
	$count__script($scope);
});
const $info = ($scope, info) => $info_total($scope, info.total);
const $total = /* @__PURE__ */ _const("total", ($scope) => {
	_attr($scope["#div/1"], "data-total", $scope.total);
	_text($scope["#text/3"], $scope.total);
	$info($scope, {
		label: "step",
		total: $scope.total
	});
});
function $setup($scope) {
	$count($scope, 0);
	$total($scope, 2 + 3);
}
const $info_total = ($scope, info_total) => _text($scope["#text/4"], info_total);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
