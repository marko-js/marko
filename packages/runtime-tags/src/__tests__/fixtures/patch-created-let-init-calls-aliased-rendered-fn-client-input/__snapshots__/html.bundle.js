// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b5: "b5 b9;D lD ;<p> </p><span> </span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "b0");
			let y = f(x);
			_html(`<p>${_text_resume($scope1_id, "a", y + input.w)}</p><span>${_text_resume($scope1_id, "b", f(input.w), 1, $scope0_reason, 2)}</span>`);
			_patch_write($scope1_id, "wd", f, 1);
			$cg__input_v && _patch_init($scope1_id, "b1");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b2");
			$cg__input_v && _patch_init($scope1_id, "b3");
			!$cg__input_v && _patch_fill($scope1_id, "vb4", y, 1);
			_scope($scope1_id, {
				d: f,
				f: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb6", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb7", input.w, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=set>set</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = input.v;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 5));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({
		show: input.show,
		v,
		w: input.w
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: v,
		b: _existing_scope($childScope)
	});
}, 1);
