// template.marko
const $template = "<!><!><!><span> </span>";
const $walks = "b%b%bD l";
const $for_content2__handler__script = _script("__tests__/template.marko_2_handler#4", ($scope) => _on($scope["#button/0"], "click", $scope.handler));
const $for_content2__handler = /*@__PURE__*/ _const("handler", $for_content2__handler__script);
const $for_content2__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content2__$params = ($scope, $params3) => $for_content2__handler($scope, $params3[1]);
const $for_content__handler__script = _script("__tests__/template.marko_1_handler#2", ($scope) => _on($scope["#button/0"], "click", $scope.handler));
const $for_content__handler = /*@__PURE__*/ _const("handler", $for_content__handler__script);
const $for_content__$params = ($scope, $params2) => $for_content__handler($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button id=of>of</button>", " ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_in("#text/1", "<button id=in> </button>", " D ", $for_content2__setup, $for_content2__$params);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$for($scope, [[$of($scope)]]);
	$for2($scope, [{ add: $in($scope) }]);
});
function $setup($scope) {
	$count($scope, 0);
}
const $of = ($scope) => () => $count($scope, +$scope.count + 1) - 1;
const $in = ($scope) => function() {
	$count($scope, $scope.count + 10);
};
_resumed["__tests__/template.marko_0/of"] = $of;
_resumed["__tests__/template.marko_0/in"] = $in;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
