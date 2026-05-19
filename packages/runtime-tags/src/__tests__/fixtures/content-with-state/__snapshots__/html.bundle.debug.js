// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	inner_default({ content: _content("__tests__/tags/outer.marko_1_content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>click</button>${_el_resume($scope1_id, "#button/0")}`);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
		_script($scope1_id, "__tests__/tags/outer.marko_1");
		_subscribe($si__input_content && $input_content__closures, writeScope($scope1_id, { _: $si__input_content && _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "1:2"));
		_resume_branch($scope1_id);
	}) });
	$si__input_content && writeScope($scope0_id, { "ClosureScopes:input_content": $input_content__closures }, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	outer_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span>`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
		_resume_branch($scope1_id);
	}) });
	_html(`<button id=increment>click</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
