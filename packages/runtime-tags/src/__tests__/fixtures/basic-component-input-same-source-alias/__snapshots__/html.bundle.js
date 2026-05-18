// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { onClick, text } = input;
	const { text: textAlias } = input;
	_html(`<button>${_escape(text)}${_el_resume($scope0_id, "b", $sg__input_text)} ${_sep($sg__input_text)}${_escape(textAlias)}${_el_resume($scope0_id, "c", $sg__input_text)}</button>${_el_resume($scope0_id, "a")}`);
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
		text: clickCount,
		onClick: _resume(function() {
			clickCount++;
		}, "a0", $scope0_id)
	});
	writeScope($scope0_id, {
		b: clickCount,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
