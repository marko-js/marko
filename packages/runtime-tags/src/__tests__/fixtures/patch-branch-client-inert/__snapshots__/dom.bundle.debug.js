// helper.ts
function now() {
	return "now";
}

// template.marko
const $template = "<main><!><button>show</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => _text($scope["#text/0"], now());
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$setup__script($scope);
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
