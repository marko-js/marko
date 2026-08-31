// tags/child-tag/index.marko
var child_tag_default = _template("__tests__/tags/child-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.footer, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_submitLabel = _serialize_if($scope0_reason, 3), $si__input_label = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_submitLabel__closures = new Set();
	const $input_label__closures = new Set();
	let open = input.open;
	child_tag_default({ footer: attrTag({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "#text/0", input.submitLabel || "OK", _serialize_guard($scope0_reason, 3))}</button><span>${_text_resume($scope1_id, "#text/1", input.label, _serialize_guard($scope0_reason, 4))}</span>`);
		_serialize_if($scope0_reason, 0) && _subscribe($si__input_label && $input_label__closures, _subscribe($si__input_submitLabel && $input_submitLabel__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4")));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		input_open: _serialize_if($scope0_reason, 2) && input.open,
		input_openChange: _serialize_if($scope0_reason, 1) && input.openChange,
		"TagVariableChange:open": input.openChange || void 0,
		"ClosureScopes:input_submitLabel": $si__input_submitLabel && $input_submitLabel__closures,
		"ClosureScopes:input_label": $si__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_openChange: ["input.openChange"],
		"TagVariableChange:open": ["openChange", "1:6"]
	});
	_resume_branch($scope0_id);
}, 1);
