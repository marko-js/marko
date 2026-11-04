// tags/widget/index.marko
const $setup = [[], []];
_shells({ b: "b," });
var widget_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.label;
});

// template.marko
_shells({
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)("")}`,
	a: "a; ;<main></main>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${((_w0) => `0${_w0}&D l`)("")};${((_w0) => `${_w0}<em> </em>`)("")}`,
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_value2 = _unfilled_if($scope0_reason, 2), $fg__input_value = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id(), $ui__input_value = _unfilled_if($scope0_reason, 2);
				const $childScope = _peek_scope_id($scope2_id, "a", 0, $ui__input_value && 1);
				let w = widget_default({ label: input.value });
				$ui__input_value && _var($scope2_id, "b", $childScope, "a0");
				_patch_child_end();
				_html(`<em>${_text_mark($scope2_id, "c", w, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a1", $cg__input_value);
				_subscribe($ui__input_value && $input_value__closures, _scope($scope2_id, { a: _existing_scope($childScope) }), $cg__input_value && "a1");
			}, 1, "a2", _unfilled_if($scope0_reason, 2));
			$cg__input_value && _patch_render($scope1_id, "a5");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_value && $cg__input_show && _patch_render($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_value2) && input.value,
		f: _write_if($scope0_reason, 2) && ($ui__input_value2 || $ui__input_show) && $input_value__closures
	}) || $fg__input_value && $ui__input_show && _patch_write($scope0_id, "xe", input.value, !_server_guard($scope0_reason, 2)) && $cg__input_show && _patch_subscribers($scope0_id, "a6", "e");
}, 1);
