// tags/toggle-panel/index.marko
const $template = "<div></div>";
_shells({
	b: "b; ;<div></div>",
	b0: "b0,<em>on</em>"
});
var toggle_panel_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `D/${_w0}& l`)(" b")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	toggle_panel_default({ show: true });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", count, 1);
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
