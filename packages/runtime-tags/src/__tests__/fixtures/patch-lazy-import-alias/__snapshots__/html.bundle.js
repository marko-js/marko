// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
_shells({ a: "a;Db%;<span class=child>child <!></span>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_patch_text($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({
	b: "b; ;<main></main>",
	b0: /*@__PURE__*/ (() => `b0 !b1;${/*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			const X = $Child_withLoadAssets;
			_html(`<button>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "d", $childScope);
			X({ label: n });
			_script($scope1_id, "b1");
			_patch_value($scope1_id, "b2", n, 1);
			_scope($scope1_id, {
				e: n,
				d: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
