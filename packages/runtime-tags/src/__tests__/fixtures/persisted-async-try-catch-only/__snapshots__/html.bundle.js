// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_message__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_template("a0", $scope0_id, "<em>bad</em>") }) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { e: $input_message__closures });
}, 1, 0);
