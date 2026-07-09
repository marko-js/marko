// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, ["one"], 0, 1, $sg__input_content);
	_dynamic_tag($scope0_id, "#text/1", input.content, ["two", 0], 0, 1, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	const $y__closures = new Set();
	let x = 1;
	let y = 1;
	child_default({ content: _content("__tests__/template.marko_1_content", (a, $b) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const b = void 0 !== $b ? $b : x * 10;
		_html(`<div id=known>${_escape(a)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}:<!>${_escape(b)}${_el_resume($scope1_id, "#text/1")}</div>`);
		_subscribe($x__closures, writeScope($scope1_id, {
			$b,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", { $b: 0 }));
		_resume_branch($scope1_id);
	}) });
	const Local = { content: _content("__tests__/template.marko_2_content", (a, $b2) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const b = void 0 !== $b2 ? $b2 : y + 100;
		_html(`<div id=local>${_escape(a)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope2_reason, 0))}:<!>${_escape(b)}${_el_resume($scope2_id, "#text/1")}</div>`);
		_subscribe($y__closures, writeScope($scope2_id, {
			$b2,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "8:2", { $b2: 0 }));
		_resume_branch($scope2_id);
	}) };
	Local.content("L");
	_html(`<button id=x>x</button>${_el_resume($scope0_id, "#button/2")}<button id=y>y</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		x,
		y,
		"ClosureScopes:x": $x__closures,
		"ClosureScopes:y": $y__closures
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		y: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
