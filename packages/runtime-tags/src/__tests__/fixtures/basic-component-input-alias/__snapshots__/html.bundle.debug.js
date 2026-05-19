// tags/my-button.marko
var my_button_default = _template("__tests__/tags/my-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const attrs = input;
	const { text } = input;
	const { onClick } = attrs;
	_html(`<button>${_escape(text)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/my-button.marko_0_onClick");
	writeScope($scope0_id, { onClick }, "__tests__/tags/my-button.marko", 0, { onClick: "3:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	my_button_default({
		text: clickCount,
		onClick: _resume(function() {
			clickCount++;
		}, "__tests__/template.marko_0/onClick", $scope0_id)
	});
	writeScope($scope0_id, {
		clickCount,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { clickCount: "1:6" });
	_resume_branch($scope0_id);
}, 1);
