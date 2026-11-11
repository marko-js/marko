// tags/counter.marko
const $template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks = "E%c%l l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>" });
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 1)}: ${_text_mark($scope0_id, "b", n, 2)}</span><button class=inc>+</button>${_el_mark($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { h: n });
});

// template.marko
_shells({
	a: "a; ;<main></main>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_start = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			counter_default({
				label: input.title,
				start: input.start
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
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_start && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.title,
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.start
	}) || ($fg__input_title && $ui__input_show && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 2)), $fg__input_start && $ui__input_show && _patch_write($scope0_id, "xf", input.start, !_server_guard($scope0_reason, 3)));
}, 1);
