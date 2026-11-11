// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items__OR__input_b = _unfilled_if($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 2), $fg__input_items__OR__input_b = _filled_guard($scope0_reason, 0);
		$fg__input_items && _unfilled_if($scope0_reason, 3) && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		$fg__input_items__OR__input_b && _unfilled_if($scope0_reason, 4) && _patch_write($scope1_id, "xe", d, !_server_guard($scope0_reason, 0));
		_html(`<p>${_text_mark($scope1_id, "a", input.a + d, 1, $scope0_reason, 1)}</p>`);
		_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 3) ? " >e" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 0);
		_patch_render($scope1_id, "b1", ((_filled_guard($scope0_reason, 4) ? " >f" : "") + ($fg__input_items__OR__input_b ? " e" : "")).slice(1), $scope0_reason, 1);
		_scope($scope1_id, {
			c: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 0) && item,
			e: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 1) && d,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 2);
	$fg__input_b && $cg__input_items && _patch_render($scope0_id, "b3", "e");
	$fg__input_a && $cg__input_items && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && $ui__input_items__OR__input_b && input.b,
		f: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 1) && input.a
	}) || ($fg__input_b && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 3)), $fg__input_a && $ui__input_items__OR__input_b && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(62 | (_updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 0) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: input.b,
		items: list
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: list,
		a: _existing_scope($childScope)
	});
}, 1);
