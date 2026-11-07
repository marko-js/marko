// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	_html(`<button class=grand-child>grand-child:${_text_mark($scope0_id, "#text/1", value, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/grand-child.marko_0");
	_scope($scope0_id, {
		input_value: _write_if($scope0_reason, 1) && input.value,
		input_valueChange: _write_if($scope0_reason, 0) && input.valueChange,
		value,
		"TagVariableChange:value": input.valueChange || void 0
	}, "__tests__/grand-child.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		value: "1:6",
		"TagVariableChange:value": ["valueChange", "1:6"]
	});
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<span>child:${_text_mark($scope0_id, "#text/0", input.count, _write_guard($scope0_reason, 0) * 2)}:${_text_mark($scope0_id, "#text/1", value, 2)}</span>`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$GrandChild_withLoadAssets({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/child.marko_0/valueChange", $scope0_id)
	});
	_scope($scope0_id, { "#childScope/3": _existing_scope($childScope) }, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=page>page:${_text_mark($scope0_id, "#text/1", count, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ count });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
