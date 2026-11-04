// tags/outer.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko;b%;<!><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/inner.marko": "__tests__/tags/inner.marko;b%;<!><!><!>" });
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!>${_w0}<!>${_w1}<!>`)($template$2, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b/${_w0}&%b/${_w1}&b`)("b%c", "b%c");
const $Outer_withLoadAssets = withLoadAssets(() => outer_default, "__tests__/tags/outer.marko", flush, "ready:__tests__/tags/outer.marko");
const $Inner_withLoadAssets = withLoadAssets(() => inner_default, "__tests__/tags/inner.marko", flush, "ready:__tests__/tags/inner.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$2], ["#childScope/3>", $setup$2]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b%b/${_w0}&%b/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<!><!>${_w0}<!>${_w1}<!>`)($template$2, $template$2)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	$Outer_withLoadAssets({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $Outer_content__a__closures = new Set();
		let a = input.a;
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
		$Inner_withLoadAssets({ content: _content("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_script($scope3_id, "__tests__/template.marko_3_a#1:2", 0);
			_subscribe($Outer_content__a__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_3_a#1:2/subscribe", 0);
			_resume_branch($scope3_id);
		}, $scope1_id) });
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, {
			a,
			_: $wi__input_a && _scope_with_id($scope0_id),
			"ClosureScopes:a/8": $Outer_content__a__closures,
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { a: "4:8" }), $cg__input_a && "__tests__/template.marko_1_input_a#0:6/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope4 = _peek_scope_id($scope0_id, "#childScope/3", 3);
	$Outer_withLoadAssets({ content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const $Outer_content2__b__closures = new Set();
		let b = input.a;
		_set_scope_reason(0);
		const $childScope3 = _peek_scope_id($scope2_id, "#childScope/1", 2);
		$Inner_withLoadAssets({ content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_script($scope4_id, "__tests__/template.marko_4_b#2:2", 0);
			_subscribe($Outer_content2__b__closures, _scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:4"), "__tests__/template.marko_4_b#2:2/subscribe", 0);
			_resume_branch($scope4_id);
		}, $scope2_id) });
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope2_id, {
			b,
			_: $wi__input_a && _scope_with_id($scope0_id),
			"ClosureScopes:b/8": $Outer_content2__b__closures,
			"#childScope/1": _existing_scope($childScope3),
			"ClosureSignalIndex:input_a/7": $wi__input_a && 1
		}, "__tests__/template.marko", "9:2", { b: "10:8" }), $cg__input_a && "__tests__/template.marko_2_input_a#0:6/subscribe", 0);
		_resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_a/7": $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures,
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/3": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0);
}, 1);
