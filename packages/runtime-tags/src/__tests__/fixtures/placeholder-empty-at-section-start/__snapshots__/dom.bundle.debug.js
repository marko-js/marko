// template.marko
const $template = "<!><!><!><button>fill</button>";
const $walks = "b%b%b b";
const $for_content__x = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/0"], $scope._.x));
const $for_content__setup = $for_content__x;
const $if_content__x = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.x));
const $if_content__setup = $if_content__x;
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$if_content__x($scope);
	$for_content__x($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $for = /*@__PURE__*/ _for_of("#text/1", "<!> tail", "%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, "filled");
}));
function $setup($scope) {
	$x($scope, "");
	$if($scope, true ? 0 : 1);
	$for($scope, [[1]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
