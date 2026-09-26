// template.marko
const $template = "<div><span>before</span><!><span>after</span></div><button class=add>add</button><button class=clear>clear</button>";
const $walks = "Db%l b b";
const $for_content__x = ($scope, x) => _html($scope, x, "#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!>", "%", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/3", ($scope) => $for($scope, [$scope.list]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$list($scope, [`<b>${$scope.list?.length}</b><i>${$scope.list?.length}</i>`, ...$scope.list]);
	});
	_on($scope["#button/2"], "click", function() {
		$list($scope, []);
	});
});
function $setup($scope) {
	$list($scope, []);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
