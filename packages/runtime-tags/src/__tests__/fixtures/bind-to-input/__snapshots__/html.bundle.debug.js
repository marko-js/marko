// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { "countChange": $countChange, count } = input;
	let x = count;
	_html(`<button${_attr("id", input.id)}${_attr("data-internal", x)}>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, {
		$countChange: _serialize_if($scope0_reason, 2) && $countChange,
		count: _serialize_if($scope0_reason, 1) && count,
		x,
		"TagVariableChange:x": $countChange || void 0
	}, "__tests__/tags/counter.marko", 0, {
		$countChange: 0,
		count: "1:10",
		x: "3:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	let x = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(8);
	counter_default({
		count: x,
		countChange: _resume((_new_x) => {
			x = _new_x;
		}, "__tests__/template.marko_0/countChange", $scope0_id),
		id: "controlled",
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(x)}${_el_resume($scope1_id, "#text/0")}`);
			_subscribe($x__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
			_resume_branch($scope1_id);
		})
	});
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(8);
	counter_default({
		count: x,
		id: "uncontrolled",
		content: _content("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_escape(x)}${_el_resume($scope2_id, "#text/0")}`);
			_subscribe($x__closures, writeScope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:x": 1
			}, "__tests__/template.marko", "4:2"));
			_resume_branch($scope2_id);
		})
	});
	writeScope($scope0_id, {
		"ClosureScopes:x": $x__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
