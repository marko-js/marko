// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, value } = input;
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", content, [value], 0, 1, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		content: _serialize_if($scope0_reason, 2) && content,
		value: _serialize_if($scope0_reason, 1) && value
	}, "__tests__/tags/child.marko", 0, {
		content: "1:9",
		value: "1:18"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 2;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		2: 1
	});
	child_default({
		value: x,
		content: _content_resume("__tests__/template.marko_1_content", (outer) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const $child_content__outer__closures = new Set();
			child_default({
				value: y,
				content: _content_resume("__tests__/template.marko_2_content", (inner) => {
					const $scope2_reason = _scope_reason(), $sg__inner = _serialize_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_html(`<div>${_escape(outer)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope1_reason, 0))}.${_sep($sg__inner)}${_escape(inner)}${_el_resume($scope2_id, "#text/1", $sg__inner)}</div>`);
					_subscribe($child_content__outer__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			writeScope($scope1_id, {
				outer,
				_: _scope_with_id($scope0_id),
				"ClosureScopes:outer": _serialize_if($scope1_reason, 0) && $child_content__outer__closures
			}, "__tests__/template.marko", "6:2", { outer: "6:8" });
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, {
		x,
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		y: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
