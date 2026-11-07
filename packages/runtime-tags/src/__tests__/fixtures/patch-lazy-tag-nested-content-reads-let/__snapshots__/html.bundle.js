// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/inner.marko
_shells({ b: "b;b%;<!><!><!>" });
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $Outer_withLoadAssets = withLoadAssets(() => outer_default, "c", flush, "_c");
const $Inner_withLoadAssets = withLoadAssets(() => inner_default, "b", flush, "_b");
const $setup = _shell_setup([[], []], ["b>", $setup$1], ["d>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b%b/${_w0}&%b/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<!><!>${_w0}<!>${_w1}<!>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	$Outer_withLoadAssets({ content: _content("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $Outer_content__a__closures = /* @__PURE__ */ new Set();
		let a = input.a;
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		$Inner_withLoadAssets({ content: _content("a2", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_script($scope3_id, "a0", 0);
			_subscribe($Outer_content__a__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "a1", 0);
			_resume_branch($scope3_id);
		}, $scope1_id) });
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, {
			c: a,
			_: $wi__input_a && _scope_with_id($scope0_id),
			i: $Outer_content__a__closures,
			b: _existing_scope($childScope)
		}), $cg__input_a && "a3", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope4 = _peek_scope_id($scope0_id, "d", 3);
	$Outer_withLoadAssets({ content: _content("a9", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const $Outer_content2__b__closures = /* @__PURE__ */ new Set();
		let b = input.a;
		_set_scope_reason(0);
		const $childScope3 = _peek_scope_id($scope2_id, "b", 2);
		$Inner_withLoadAssets({ content: _content("a7", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_script($scope4_id, "a5", 0);
			_subscribe($Outer_content2__b__closures, _scope($scope4_id, { _: _scope_with_id($scope2_id) }), "a6", 0);
			_resume_branch($scope4_id);
		}, $scope2_id) });
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope2_id, {
			c: b,
			_: $wi__input_a && _scope_with_id($scope0_id),
			i: $Outer_content2__b__closures,
			b: _existing_scope($childScope3),
			Ch: $wi__input_a && 1
		}), $cg__input_a && "a8", 0);
		_resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		h: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures,
		b: _existing_scope($childScope2),
		d: _existing_scope($childScope4)
	});
}, 1);
