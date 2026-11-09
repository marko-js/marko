// tags/c2.marko
var c2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0), $wi__input_tab = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (t) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", t.content, {}, 0, 0, $wg__input_tab);
		$wi__input_tab && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_tab, $wg__input_tab);
	$wi__input_tab && _scope($scope0_id, {});
});

// tags/c1.marko
var c1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = /* @__PURE__ */ new Set();
	let v = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			c1_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id();
				c2_default({ tab: attrTag({
					x: v,
					content: _content("a0", () => {
						_scope_reason();
					}, $scope2_id)
				}) });
				_subscribe($v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), "a1", 0);
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, { d: $v__closures });
}, 1);
