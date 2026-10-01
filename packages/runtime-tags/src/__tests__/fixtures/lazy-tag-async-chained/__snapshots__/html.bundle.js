// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button${_attr("id", input.id)}>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({
		id: "sync",
		value: input.value
	});
	_await($scope0_id, "c", resolveAfter(input.value + 1, 1), (value) => {
		const $scope1_id = _scope_id();
		const $childScope2 = _peek_scope_id();
		$Child_withLoadAssets({
			id: "async",
			value
		});
		$wi__input_value && _scope($scope1_id, { b: _existing_scope($childScope2) });
	}, $wg__input_value);
	$wi__input_value && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
