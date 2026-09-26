// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.value, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_valueChange: input.valueChange,
		input_value: input.value
	}, "__tests__/child.marko", 0, {
		input_valueChange: ["input.valueChange"],
		input_value: ["input.value"]
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_await($scope0_id, "#text/2", value ? value : resolveAfter(value, 3), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "#text/0", v)}</div>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
	});
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
