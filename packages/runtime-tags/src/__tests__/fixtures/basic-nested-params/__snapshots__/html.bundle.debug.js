// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.value], 0, 1, $wg__input_content__OR__input_value);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		content: _write_if($scope0_reason, 2) && input.content,
		value: _write_if($scope0_reason, 1) && input.value
	}, "__tests__/tags/child.marko", 0, {
		content: "1:9",
		value: "1:18"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 2;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	child_default({
		value: x,
		content: _content_resume("__tests__/template.marko_1*content", (outer) => {
			const $scope1_reason = _scope_reason(), $wg__outer = _write_guard($scope1_reason, 0), $wi__outer = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $child_content__outer__closures = new Set();
			child_default({
				value: y,
				content: _content("__tests__/template.marko_2*content", (inner) => {
					const $scope2_reason = _scope_reason(), $wg__inner = _write_guard($scope2_reason, 0), $wi__inner = _write_if($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_html(`<div>${_text_resume($scope2_id, "#text/0", outer, $wg__outer)}.${_text_resume($scope2_id, "#text/1", inner, $wg__inner * 2)}</div>`);
					($wi__outer || $wi__inner) && _subscribe($wi__outer && $child_content__outer__closures, _scope($scope2_id, { _: $wi__outer && _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_outer#1:2/subscribe", $wg__outer || $wg__inner);
					$wg__outer || $wg__inner || ($wi__outer || $wi__inner) && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"ClosureScopes:outer/5": $wi__outer && $child_content__outer__closures
			}, "__tests__/template.marko", "6:2");
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		y: "2:6"
	});
}, 1);
