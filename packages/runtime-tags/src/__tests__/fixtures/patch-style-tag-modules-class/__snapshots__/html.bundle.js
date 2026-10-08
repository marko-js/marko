// template.marko
const $class = _attr_class(void 0);
_shells({
	a: /*@__PURE__*/ (() => `a;D l%;${(() => `<div class="${void 0}"> </div><!><!>`)()}`)(),
	a0: /*@__PURE__*/ (() => `a0,${/*@__PURE__*/ (() => `<span class="${void 0}"></span>`)()}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${$class}>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</div>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${$class}></span>`);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, {});
}, 1);
