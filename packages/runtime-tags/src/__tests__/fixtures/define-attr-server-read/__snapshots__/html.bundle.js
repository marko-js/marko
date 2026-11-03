// tags/echo.marko
var echo_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.text, $wg__input_text)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: n });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Foo = { label: input.label };
	_html(`<span>${_text_resume($scope0_id, "a", Foo.label, $wg__input_label)}</span>`);
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	echo_default({ text: Foo.label });
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
