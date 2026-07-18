// template.marko
const $template = "<div id=out><!>:<!>:<!></div><button id=update>u</button>";
const $walks = "D%c%c%l b";
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$list_($scope, $scope.list?.[0]);
	$list_2($scope, $scope.list?.[1]);
});
const $pattern4 = ($scope, $pattern) => (([, ...rest]) => $rest($scope, rest))($pattern);
const $list_ = /*@__PURE__*/ _const("list_0", ($scope) => $pattern4($scope, $scope.list_0));
const $pattern6 = ($scope, $pattern2) => $temp2($scope, $pattern2[0]);
const $list_2 = /*@__PURE__*/ _const("list_1", ($scope) => $pattern6($scope, $scope.list_1));
const $obj = /*@__PURE__*/ _let("obj/7", ($scope) => $kept($scope, $scope.obj.kept));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$obj($scope, {});
	$list($scope, [[{ n: 1 }, { n: 2 }], [{ c: "C" }]]);
}));
function $setup($scope) {
	$list($scope, [[{ n: 1 }], []]);
	$obj($scope, { kept: "k" });
	$setup__script($scope);
}
const $kept = /*@__PURE__*/ _const("kept", ($scope) => _text($scope["#text/1"], String($scope.kept)));
const $rest = ($scope, rest) => $rest_length($scope, rest.length);
const $rest_length = ($scope, rest_length) => _text($scope["#text/0"], rest_length);
const $pattern5 = ($scope, $pattern3 = {}) => $c2($scope, $pattern3.c);
const $c3 = ($scope, c = "c") => _text($scope["#text/2"], c);
const $c2 = $c3;
const $temp2 = $pattern5;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
