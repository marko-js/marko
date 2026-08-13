// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 1)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		});
		$scope0_reason && _subscribe($input_promise__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_persisted_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, $scope0_id) }) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { g: $input_promise__closures });
}, 1, 0);
