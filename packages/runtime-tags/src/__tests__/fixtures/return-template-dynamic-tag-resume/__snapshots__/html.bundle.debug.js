// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/picker.marko
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = child_default;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = picker_default({});
	let count = 1;
	_dynamic_tag($scope0_id, "#text/2", Tag, { value: count });
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		Tag,
		count
	}, "__tests__/template.marko", 0, {
		Tag: "1:9",
		count: "2:6"
	});
}, 1);
