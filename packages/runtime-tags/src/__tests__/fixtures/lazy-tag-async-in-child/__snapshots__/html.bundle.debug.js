// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = input.value;
	_await($scope0_id, "#text/0", resolveAfter(10, 1), (value) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(count)}${_el_resume($scope1_id, "#text/1")}:${_escape(value)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/child.marko_1_count");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/child.marko", "4:2"));
		_resume_branch($scope1_id);
	});
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/child.marko", 0, { count: "3:6" });
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
