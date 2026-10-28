// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b !; ;<main></main>",
	b3: /*@__PURE__*/ (() => `b3${_shell_marker(_shell_setup([[], ["b0"]], ["c>", $setup]))};${/*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<div>x</div><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div${_attrs(input.attrs, "a", $scope1_id, "div", void 0, $scope0_reason, 2)}>x</div>${_el_resume($scope1_id, "a")}`);
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id($scope1_id, "c", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				c: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.attrs,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb4", input.attrs, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.attrs), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "vb5", input.label, !_server_guard($scope0_reason, 3)));
}, 1);
