// child.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ a: "a;D ;<span> </span>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b !b2; D l ;<button class=n> </button><main></main>",
	b1: `b1${_shell_marker([["b5"], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(6);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ label: `${input.label}${n}` });
			_patch_child_end();
			_patch_render($scope1_id, "b0", _filled_guard($scope0_reason, 1) && ">g");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "c", $wg__input_show)}`);
	_script($scope0_id, "b2");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b3", "g");
	_scope($scope0_id, {
		g: input.label,
		h: n
	}) || $fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1));
}, 1);
