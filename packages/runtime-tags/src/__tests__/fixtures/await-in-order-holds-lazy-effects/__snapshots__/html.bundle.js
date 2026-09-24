// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.value, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.valueChange,
		f: input.value
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "b0", $scope0_id)
	});
	_await($scope0_id, "c", value ? value : resolveAfter(value, 3), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", v)}</div>`);
		_scope($scope1_id, {});
	});
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
