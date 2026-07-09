// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, ["one"], 0, 1, $sg__input_content);
	_dynamic_tag($scope0_id, "b", input.content, ["two", 0], 0, 1, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	const $y__closures = /* @__PURE__ */ new Set();
	let x = 1;
	let y = 1;
	child_default({ content: _content("a0", (a, $b) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const b = void 0 !== $b ? $b : x * 10;
		_html(`<div id=known>${_escape(a)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}:<!>${_escape(b)}${_el_resume($scope1_id, "b")}</div>`);
		_subscribe($x__closures, writeScope($scope1_id, {
			e: $b,
			_: _scope_with_id($scope0_id)
		}));
		_resume_branch($scope1_id);
	}) });
	({ content: _content("a1", (a, $b2) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const b = void 0 !== $b2 ? $b2 : 101;
		_html(`<div id=local>${_escape(a)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}:<!>${_escape(b)}${_el_resume($scope2_id, "b")}</div>`);
		_subscribe($y__closures, writeScope($scope2_id, {
			e: $b2,
			_: _scope_with_id($scope0_id)
		}));
		_resume_branch($scope2_id);
	}) }).content("L");
	_html(`<button id=x>x</button>${_el_resume($scope0_id, "c")}<button id=y>y</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: x,
		f: y,
		Be: $x__closures,
		Bf: $y__closures
	});
	_resume_branch($scope0_id);
}, 1);
