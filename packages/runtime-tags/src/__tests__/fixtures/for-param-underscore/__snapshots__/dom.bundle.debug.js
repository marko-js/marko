// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__n = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/2"], $scope._.n));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#div/0"], "click", function() {
	$n($scope._, $scope._.n + $scope.__length);
}));
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	$for_content__setup__script($scope);
};
const $for_content___ = ($scope, _) => {
	_text($scope["#text/1"], _);
	$for_content____length($scope, _?.length);
};
const $for_content__$params = ($scope, $params2) => $for_content___($scope, $params2[0]);
const $for_content____length = /*@__PURE__*/ _const("__length");
const $n = /*@__PURE__*/ _let("n/1", $for_content__n);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div><!>:<!></div>", " D%c%", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$n($scope, 0);
	$for($scope, [["ab", "cde"]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
