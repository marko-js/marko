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
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)("")}`)(),
	a: "a !; ;<main></main>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `0${_w0}&D l`)("")};${((_w0) => `${_w0}<em> </em>`)("")}`)(),
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id($scope2_id, "a", 0, $cg__input_value && 1);
				let w = widget_default({ label: input.value });
				$cg__input_value && _var($scope2_id, "b", $childScope, "a0");
				_patch_child_end();
				_html(`<em>${_text_resume($scope2_id, "c", w, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_value ? "a1" : "a2");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, { a: _existing_scope($childScope) }), $cg__input_value && "a2");
			}, 1, "a3");
			$cg__input_value && _patch_init($scope1_id, "a6");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_value__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.value, !_server_guard($scope0_reason, 2));
}, 1);
