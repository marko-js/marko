// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content2__val = ($scope, val) => _text($scope["#text/1"], val);
const $for_content2__$params = ($scope, $params3) => $for_content2__val($scope, $params3[0]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__val = ($scope, val) => _text($scope["#text/1"], val);
const $for_content__$params = ($scope, $params2) => $for_content__val($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of("#text/0", "<div><!>: <!></div>", "D%c%l", $for_content__setup, $for_content__$params);
const $arrA = ($scope, arrA) => $for($scope, [arrA]);
const $for2 = /* @__PURE__ */ _for_of("#text/1", "<div><!>: <!></div>", "D%c%l", $for_content2__setup, $for_content2__$params);
const $arrB = /* @__PURE__ */ _let("arrB/3", ($scope) => $for2($scope, [$scope.arrB]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $arrB($scope, [1, 2]));
function $setup($scope) {
	$arrA($scope, [
		1,
		2,
		3
	]);
	$arrB($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
