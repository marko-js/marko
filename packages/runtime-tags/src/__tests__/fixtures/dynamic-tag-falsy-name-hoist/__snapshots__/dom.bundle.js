// template.marko
const $el_getter = _hoist_resume("a0", 0, "B1");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a1", "<input>", " ", 0, 0, "B1"));
const $tag = /*@__PURE__*/ _let(7, ($scope) => $dynamicTag($scope, $scope.h));
const $result = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.b, "click", function() {
		$result($scope, `${$el_getter($scope)() === document.querySelector("input")}/${[...$el_getter($scope)].length}`);
	});
	_on($scope.c, "click", function() {
		$tag($scope, $scope.h ? null : "div");
	});
});
