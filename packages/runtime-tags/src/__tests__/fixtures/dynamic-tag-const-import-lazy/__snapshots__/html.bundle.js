// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.value, _write_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.valueChange,
		f: input.value
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "b0", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "c", value)}</span>`);
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
