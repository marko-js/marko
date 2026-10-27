// tags/echo.marko
var echo_default = _template("__tests__/tags/echo.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.text, $wg__input_text)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/echo.marko", 0);
});

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Foo = { label: input.label };
	_html(`<span>${_text_resume($scope0_id, "#text/0", Foo.label, $wg__input_label)}</span>`);
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	echo_default({ text: Foo.label });
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
