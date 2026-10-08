// components/child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
});

// components/wrapper.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_b");
_shells({
	c: "c !; ;<section></section>",
	c0: /*@__PURE__*/ (() => `c0;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var wrapper_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c0"], $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: input.label }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "c1", input.label);
});

// template.marko
_shells({ a: "a !a0; ;<main></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 1, "</main>", 1);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a3", mounted, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.show,
		e: input.label
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a1", input.show), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "a2", input.label));
}, 1);
