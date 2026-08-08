// tags/my-menu/index.marko
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(_content_resume("a1", " ", " "), { 4($scope) {
	_text($scope.a, $scope.e);
} });
const $onClick = ($locals) => function(ev) {
	ev.target.textContent = $locals.e;
};
_resume("a0", $onClick);
