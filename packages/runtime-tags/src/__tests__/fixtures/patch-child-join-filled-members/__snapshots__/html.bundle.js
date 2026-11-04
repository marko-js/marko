// tags/child.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup$1 = [[], []];
_shells({
	b: "b;D l%;<p> </p><!><!>",
	b2: "b2;D%c%;<em><!>|<!></em>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b__OR__input_show = _unfilled_if($scope0_reason, 2), $ui__input_a__OR__input_show = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.a, 1, $scope0_reason, 3)}|${_text_mark($scope1_id, "b", input.b, 2, $scope0_reason, 4)}</em>`);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b0");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["b2"], $scope0_reason, 5);
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b1", "f");
	_patch_render($scope0_id, "b3", [$fg__input_a && "e", $fg__input_b && "f"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: ($ui__input_b__OR__input_show || $ui__input_a__OR__input_b || _unfilled_if($scope0_reason, 3)) && input.a,
		f: ($ui__input_a__OR__input_show || $ui__input_a__OR__input_b || _unfilled_if($scope0_reason, 4)) && input.b
	}) || ($fg__input_a && $ui__input_b__OR__input_show && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $ui__input_a__OR__input_show && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	let s = true;
	_set_scope_reason(2286 | $uf__input_x << 9);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(158 | (_updates_from($scope0_reason, 0) << 5 | $uf__input_x << 9 | _updates_from($scope0_reason, 2) << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}<button class=s>s</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
