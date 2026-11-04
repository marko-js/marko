// components/child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_mark($scope0_id, "c", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { g: count });
});

// components/wrapper.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "b", flush, "_b");
_shells({
	c: "c; ;<section></section>",
	c1: `c1${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "c0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c1"], $scope0_reason, 0);
	_html(`</section>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "c0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: "a !a2; ;<main></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</main>", 1);
	_script($scope0_id, "a2");
	$fg__input_show && _patch_render($scope0_id, "a0", "d");
	$fg__input_label && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		d: input.show,
		e: input.label
	}) || ($fg__input_show && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
