// template.marko
const $template = "<div><span>s</span> </div><div><!--note--> </div><button>set</button>";
const $walks = "Db lDb l b";
const $b = /*@__PURE__*/ _let("b/3", ($scope) => {
	_text($scope["#text/0"], $scope.b);
	_text($scope["#text/1"], $scope.b);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$b($scope, "filled");
}));
function $setup($scope) {
	$b($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
