// tags/pill.marko
const $template = "<b class=pill> </b>";
const $setup = [[], []];
_shells({ b: "b;D ;<b class=pill> </b>" });
var pill_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=pill>${_text_resume($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template),
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template),
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<em>closed</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope = _patch_child($scope3_id, "a", 0);
				pill_default({ text: value });
				_patch_child_end();
				_scope($scope3_id, { a: _existing_scope($childScope) });
			}, 1, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a4");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2", "a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
