// template.marko
const $template = "<span> </span><!><!><!><!>";
const $walks = "D l%b%b%c";
const $for_content3__fn__script = _script("__tests__/template.marko_3_fn#2", ($scope) => _on($scope["#button/0"], "click", $scope.fn));
const $for_content3__fn = /*@__PURE__*/ _const("fn", $for_content3__fn__script);
const $for_content3__$params = ($scope, $params4) => $for_content3__fn($scope, $params4[0]);
const $for_content2__fn__script = _script("__tests__/template.marko_2_fn#2", ($scope) => _on($scope["#button/0"], "click", $scope.fn));
const $for_content2__fn = /*@__PURE__*/ _const("fn", $for_content2__fn__script);
const $for_content2__$params = ($scope, $params3) => $for_content2__fn($scope, $params3[0]);
const $for_content__fn__script = _script("__tests__/template.marko_1_fn#2", ($scope) => _on($scope["#button/0"], "click", $scope.fn));
const $for_content__fn = /*@__PURE__*/ _const("fn", $for_content__fn__script);
const $for_content__$params = ($scope, $params2) => $for_content__fn($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<button id=concat></button>", " ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<button id=values></button>", " ", 0, $for_content2__$params);
const $for3 = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<button id=direct></button>", " ", 0, $for_content3__$params);
const $n = /*@__PURE__*/ _let("n/4", ($scope) => {
	_text($scope["#text/0"], $scope.n);
	$for($scope, [[$of($scope)].concat([])]);
	$for2($scope, [Object.values({ counted: $of2($scope) })]);
	$for3($scope, [[$of3($scope)]]);
});
function $setup($scope) {
	$n($scope, 0);
}
const $of = ($scope) => () => $n($scope, +$scope.n + 1) - 1;
const $of2 = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
const $of3 = ($scope) => () => $n($scope, +$scope.n + 1) - 1;
_resumed["__tests__/template.marko_0/of"] = $of;
_resumed["__tests__/template.marko_0/of2"] = $of2;
_resumed["__tests__/template.marko_0/of3"] = $of3;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
