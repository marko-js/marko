// tags/echo/index.marko
var echo_default = _template("__tests__/tags/echo/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { ...rest } = input;
	_html(`<em>${_text_resume($scope0_id, "#text/0", rest.label, _serialize_guard($scope0_reason, 0))}</em>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/echo/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html("<main>");
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	echo_default({ label });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
	_resume_branch($scope0_id);
}, 1);
