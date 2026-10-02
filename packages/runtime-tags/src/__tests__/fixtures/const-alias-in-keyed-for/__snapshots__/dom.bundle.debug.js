// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $for_content__n = ($scope, n) => _text($scope["#text/0"], n);
const $for_content__$params = ($scope, $params2) => $for_content__n($scope, $params2[0].n);
const $for = /*@__PURE__*/ _for_of("#text/0", "<span> </span>", "D ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/2", ($scope) => $for($scope, [$scope.list, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, [{
		id: 1,
		n: "b"
	}, {
		id: 2,
		n: "c"
	}]);
}));
function $setup($scope) {
	$list($scope, [{
		id: 1,
		n: "a"
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
