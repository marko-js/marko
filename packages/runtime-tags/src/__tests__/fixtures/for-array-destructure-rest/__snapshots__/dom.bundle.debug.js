// template.marko
const $template = "<ul></ul><button>update</button>";
const $walks = " b b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__first = ($scope, first) => _text($scope["#text/1"], first);
const $for_content__$temp_ = ($scope, $temp_1) => _text($scope["#text/2"], $temp_1);
const $for_content__$temp_2 = ($scope, $temp_2) => _text($scope["#text/3"], $temp_2);
const $for_content__rest_length = ($scope, rest_length) => _text($scope["#text/4"], rest_length);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2[0]);
const $for_content__$temp = ($scope, $temp) => {
	(([, ...rest]) => $for_content__rest($scope, rest))($temp);
	$for_content__first($scope, $temp[0]);
	$for_content__$temp_($scope, $temp[1]);
	$for_content__$temp_2($scope, $temp[2]);
};
const $for_content__rest = ($scope, rest) => $for_content__rest_length($scope, rest.length);
const $for = /* @__PURE__ */ _for_of("#ul/0", "<li><!>: first=<!> rest0=<!> rest1=<!> len=<!></li>", "D%c%c%c%c%l", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let("rows/2", ($scope) => $for($scope, [$scope.rows]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, [[
		7,
		8,
		9,
		10
	]]);
}));
function $setup($scope) {
	$rows($scope, [[
		1,
		2,
		3
	], [
		4,
		5,
		6
	]]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
