// tags/frame.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;b%;<!><!><!>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/frame.marko_0_input_content#3_input_x#4/setup", [$fg__input_content && "input_content", $fg__input_x && "input_x"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.x
	}, "__tests__/tags/frame.marko", 0, {
		input_content: ["input.content"],
		input_x: ["input.x"]
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/&b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/&b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $sg__input_n = _server_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 1), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const Effect = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const twice = input.n * 2;
		_script($scope1_id, "__tests__/template.marko_1_input_n#0:4_twice#0", 0, _filled_guard($scope0_reason, 1), [">input_n", "twice"]);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope1_id, {
			twice,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { twice: "2:10" }), $cg__input_n && "__tests__/template.marko_1_input_n#0:4/subscribe", 0) || _filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:twice", twice, !$sg__input_n);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Effect.content({});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	frame_default({
		x: input.x,
		content: _content_resume("__tests__/template.marko_2*content", (x) => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", x, 1, 4, 0)} ${_text_mark($scope2_id, "#text/1", input.n, 2, $scope0_reason, 1)}</p>`);
			$cg__input_n && _patch_render($scope2_id, "__tests__/template.marko_2_input_n#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_n/6": $wi__input_n && 1
			}, "__tests__/template.marko", "6:2"), $cg__input_n && "__tests__/template.marko_2_input_n#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_n && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_n#4/subscribers", "input_n");
	_scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/6": $wi__input_n && $input_n__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || $fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !$sg__input_n);
}, 1);
