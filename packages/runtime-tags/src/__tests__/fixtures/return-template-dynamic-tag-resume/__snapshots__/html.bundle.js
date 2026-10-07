// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/picker.marko
var picker_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return child_default;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = picker_default({});
	let count = 1;
	_dynamic_tag($scope0_id, "c", Tag, { value: count });
	_html(`<button>inc</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: Tag,
		f: count
	});
}, 1);
