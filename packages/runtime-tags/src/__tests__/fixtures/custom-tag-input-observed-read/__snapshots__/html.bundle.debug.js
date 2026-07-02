// tags/show-result/index.marko
var show_result_default = _template("__tests__/tags/show-result/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=result>${_escape(input.get())}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/show-result/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	show_result_default({ get: function() {
		return count;
	} });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
