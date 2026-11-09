// tags/c2.marko
var c2_default = _template("__tests__/tags/c2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0), $wi__input_tab = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (t) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", t.content, {}, 0, 0, $wg__input_tab);
		$wi__input_tab && _scope($scope1_id, {}, "__tests__/tags/c2.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_tab, $wg__input_tab);
	$wi__input_tab && _scope($scope0_id, {}, "__tests__/tags/c2.marko", 0);
});

// tags/c1.marko
var c1_default = _template("__tests__/tags/c1.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/c1.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = new Set();
	let v = true;
	_if(() => {
		if (v) {
			const $scope1_id = _scope_id();
			c1_default({ content: _content("__tests__/template.marko_2*content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id();
				c2_default({ tab: attrTag({
					x: v,
					content: _content("__tests__/template.marko_3*content", () => {
						_scope_reason();
					}, $scope2_id)
				}) });
				_subscribe($v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_v#0:2/subscribe", 0);
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:v/3": $v__closures }, "__tests__/template.marko", 0);
}, 1);
