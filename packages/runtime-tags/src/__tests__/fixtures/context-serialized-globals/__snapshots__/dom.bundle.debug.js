// tags/counter.marko
const $template2 = "<!><button class=add>add</button><span class=count> </span>";
const $walks2 = "b bD l";
const $context_count = _context_closure("__tests__/template.marko", ($scope2, $provider) => $count$1($scope2, $provider["#ContextValue"]), "__tests__/tags/counter.marko_0_count/context", "../template.marko");
const $count$1 = /*@__PURE__*/ _const("count", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup2__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	_context_write($scope, "__tests__/template.marko", $scope.count + 1);
}));
function $setup2($scope) {
	$context_count($scope);
	$setup2__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template2, $walks2, $setup2);

// template.marko
const $template = "<!><!><button class=log>log</button>";
const $walks = "b%b b";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _context_value($scope, $scope.count, "__tests__/template.marko"));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.$global.settings.message);
}));
function $setup($scope) {
	_context_branch($scope, "__tests__/template.marko");
	_context_change($scope, $valueChange($scope));
	$count($scope, 0);
	$dynamicTag($scope, counter_default);
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
