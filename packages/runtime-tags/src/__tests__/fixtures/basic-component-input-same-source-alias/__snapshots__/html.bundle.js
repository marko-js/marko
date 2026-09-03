// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	const $sg__input_text = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { onClick, text } = input;
	const { text: textAlias } = input;
	_html(`<button>${_text_resume($scope0_id, "b", text, $sg__input_text)} ${_text_resume($scope0_id, "c", textAlias, $sg__input_text * 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: onClick });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	my_button_default({
		text: clickCount,
		onClick: _resume(function() {
			clickCount++;
		}, "a0", $scope0_id)
	});
	_scope($scope0_id, {
		b: clickCount,
		a: _existing_scope($childScope)
	});
}, 1);
