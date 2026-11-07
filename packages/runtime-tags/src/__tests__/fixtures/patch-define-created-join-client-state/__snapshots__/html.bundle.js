// template.marko
const $PlainChild_content__walks = "Db%l";
const $PlainChild_content__template = "<p>t=<!></p>";
_shells({
	a: "a !a4; b%;<button>+</button><!><!>",
	a3: `a3 a6;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($PlainChild_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($PlainChild_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const PlainChild = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__input_a = _filled_guard($scope2_reason, 1), $fg__input_b = _filled_guard($scope2_reason, 2);
		_html(`<p>t=${_text_mark($scope2_id, "a", input.a + input.b, 2, $scope2_reason, 0)}</p>`);
		_patch_render($scope2_id, "a1", [$fg__input_a && "d", $fg__input_b && "e"], $scope2_reason, 0);
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0)) && input.a,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && input.b
		}) || ($fg__input_a && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "xd", input.a, !_server_guard($scope2_reason, 1)), $fg__input_b && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "xe", input.b, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	let tab = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			PlainChild.content({
				a: tab,
				b: input.x
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a4");
	$fg__input_x && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.x,
		g: tab
	}) || $fg__input_x && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 1));
}, 1);
