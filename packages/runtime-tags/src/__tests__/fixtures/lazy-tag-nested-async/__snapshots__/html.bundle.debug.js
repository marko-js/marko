// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.value;
	_html(`<button id=grand>grand:<!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}:${_sep($sg__input_value)}${_escape(input.value)}${_el_resume($scope0_id, "#text/2", $sg__input_value)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/3", resolveAfter(20, 2), (v) => {
		const $scope1_id = _scope_id();
		_html(`<span id=grand-await>${_escape(v)}</span>`);
	}, 0);
	_script($scope0_id, "__tests__/grand-child.marko_0_n");
	writeScope($scope0_id, { n }, "__tests__/grand-child.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = input.value;
	_html(`<button id=child>child:<!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/2", resolveAfter(10, 1), (value) => {
		const $scope1_id = _scope_id();
		_html(`<span id=child-await>${_escape(value)}</span>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		$GrandChild_withLoadAssets({ value: count });
		_subscribe($count__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/2": _existing_scope($childScope)
		}, "__tests__/child.marko", "6:2"));
		_resume_branch($scope1_id);
	});
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/child.marko", 0, { count: "4:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=before>before</div>");
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_html("<div id=after>after</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
