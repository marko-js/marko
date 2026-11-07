// grand-child.marko
var grand_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	_html(`<button class=grand-child>grand-child:${_text_mark($scope0_id, "b", value, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.value,
		f: _write_if($scope0_reason, 0) && input.valueChange,
		h: value,
		i: input.valueChange || void 0
	});
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<span>child:${_text_mark($scope0_id, "a", input.count, _write_guard($scope0_reason, 0) * 2)}:${_text_mark($scope0_id, "b", value, 2)}</span>`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$GrandChild_withLoadAssets({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	_scope($scope0_id, { d: _existing_scope($childScope) });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=page>page:${_text_mark($scope0_id, "b", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ count });
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: count,
		d: _existing_scope($childScope)
	});
}, 1);
