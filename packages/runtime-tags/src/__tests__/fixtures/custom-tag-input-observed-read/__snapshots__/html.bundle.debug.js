// tags/show-result/index.marko
var show_result_default = _template("__tests__/tags/show-result/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div class=result>${_text_resume($scope0_id, "#text/0", input.get(), $sg__input)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/show-result/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	show_result_default({ get: function() {
		return count;
	} });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
