// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	const $sg__input_value_text = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { onClick, value: { text } } = input;
	const { value: { text: textAlias } } = input;
	_html(`<button>${_escape(text)}${_el_resume($scope0_id, "b", $sg__input_value_text)} ${_sep($sg__input_value_text)}${_escape(textAlias)}${_el_resume($scope0_id, "c", $sg__input_value_text)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { f: onClick });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	my_button_default({
		value: { text: clickCount },
		onClick: _resume(function() {
			clickCount++;
		}, "a0", $scope0_id)
	});
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	my_button_default({
		onClick: _resume(function() {
			clickCount++;
		}, "a1", $scope0_id),
		value: attrTag({ text: clickCount })
	});
	writeScope($scope0_id, {
		c: clickCount,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
