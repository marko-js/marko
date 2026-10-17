// template.marko
const $Probe_content__walks = "b";
const $Probe_content__template = "<p>probe</p>";
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Probe_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Probe_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Probe = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const bag = { items: [] };
		_html("<p>probe</p>");
		_script($scope1_id, "a2", 0);
		_patch_write($scope1_id, "wb", bag.items, 1);
		_scope($scope1_id, { b: bag.items });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "a");
			Probe.content({});
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
