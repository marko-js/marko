// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button${_attr("id", input.id)}>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	$load_Child({
		id: "sync",
		value: input.value
	});
	_await($scope0_id, "#text/2", resolveAfter(input.value + 1, 1), (value) => {
		const $scope1_id = _scope_id();
		const $childScope2 = _peek_scope_id();
		$load_Child({
			id: "async",
			value
		});
		$si__input_value && writeScope($scope1_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "5:2");
	}, _serialize_guard($scope0_reason, 0));
	$si__input_value && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
