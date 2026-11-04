// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b5: "b5 !;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1), $fg__input_w = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "b0");
			let y = f(x);
			_html(`<p>${_text_mark($scope1_id, "a", y + input.w)}</p>`);
			_patch_write($scope1_id, "wc", f, 1);
			$cg__input_v && _patch_render($scope1_id, "b1");
			$cg__input_v && _patch_render($scope1_id, "b2");
			_patch_render($scope1_id, "b3", _filled_guard($scope0_reason, 2) && ">f");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb4", y, 1);
			_scope($scope1_id, {
				c: f,
				e: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b5"], $scope0_reason, 0);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "b1", "e");
	$fg__input_w && $cg__input_show && _patch_render($scope0_id, "b6", "f");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || ($fg__input_v && $ui__input_show && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=set>set</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = input.v;
	_html(`<button class=set>set</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(8 | (_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 2) << 5));
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
