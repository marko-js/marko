// tags/child/index.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["b2"]];
_shells({
	b: "b !b2;b%b ;<!><!><button>+</button>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.x, 1, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	$fg__input_x && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "f");
	_script($scope0_id, "b3", 1, 0, $fg__input_x && "f", "b4");
	_patch_fill($scope0_id, "vb5", n, 1);
	_scope($scope0_id, {
		f: input.x,
		g: n
	}) || $fg__input_x && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2), $fg__input_more = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				x: input.x,
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_more && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.x,
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.more
	}) || ($fg__input_x && $ui__input_show && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)), $fg__input_more && $ui__input_show && _patch_write($scope0_id, "xf", input.more, !_server_guard($scope0_reason, 3)));
}, 1);
