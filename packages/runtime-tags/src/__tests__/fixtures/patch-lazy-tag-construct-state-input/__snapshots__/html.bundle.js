// child.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ a: "a;D ;<span> </span>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b !b1; D l ;<button class=n> </button><main></main>",
	b0: /*@__PURE__*/ (() => `b0${_shell_marker(_shell_setup([["b4"], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(6);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ label: `${input.label}${n}` });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $wg__input_show)}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		g: input.label,
		h: n
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
