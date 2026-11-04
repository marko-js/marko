// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({
	a: "a !a5;b%b ;<!><!><button>+</button>",
	a4: `a4 a7;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks)};${$Row_content__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a1", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__label = _filled_guard($scope2_reason, 2);
		_html(`<p>${_text_mark($scope2_id, "a", fn() + label, 1, $scope2_reason, 0)}</p>`);
		_patch_render($scope2_id, "a2", $fg__label && "e", $scope2_reason, 0);
		_scope($scope2_id, {
			d: _write_if($scope2_reason, 2) && fn,
			e: _write_if($scope2_reason, 1) && label
		}) || $fg__label && _patch_write($scope2_id, "xe", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Row.content({
				fn: _resume(() => count, "a0", $scope1_id),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a3");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		g: count
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1));
}, 1);
