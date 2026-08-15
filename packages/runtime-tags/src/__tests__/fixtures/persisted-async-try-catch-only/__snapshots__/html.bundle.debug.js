// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_message__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_template("__tests__/template.marko_2*content", $scope0_id, "<em>bad</em>") }) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "ClosureScopes:input_message": $input_message__closures }, "__tests__/template.marko", 0);
}, 1, 0);
