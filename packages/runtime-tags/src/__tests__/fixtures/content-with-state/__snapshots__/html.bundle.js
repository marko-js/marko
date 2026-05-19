// tags/inner.marko
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	inner_default({ content: _content("c1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>click</button>${_el_resume($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
		_script($scope1_id, "c0");
		_subscribe($si__input_content && $input_content__closures, writeScope($scope1_id, { _: $si__input_content && _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) });
	$si__input_content && writeScope($scope0_id, { Bd: $input_content__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	outer_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(count)}${_el_resume($scope1_id, "a")}</span>`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) });
	_html(`<button id=increment>click</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		c: count,
		Bc: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
