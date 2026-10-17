// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => console.log("static child script"));
const $setup$1 = $setup__script$1;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}<button>t</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `b%b%/${_w0}&b b`)("");
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("row script"));
const $for_content__setup = $for_content__setup__script;
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _lifecycle($scope, { onMount: function() {
	console.log("if lifecycle");
} }));
const $if_content__setup = $if_content__setup__script;
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", 0, 0, $for_content__setup);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_lifecycle($scope, { onMount: function() {
		console.log("parent lifecycle");
	} });
	console.log("parent script");
	_on($scope["#button/3"], "click", function() {
		$show($scope, !$scope.show);
		$items($scope, [...$scope.items, $scope.items.length + 1]);
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$show($scope, true);
	$items($scope, [1, 2]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
