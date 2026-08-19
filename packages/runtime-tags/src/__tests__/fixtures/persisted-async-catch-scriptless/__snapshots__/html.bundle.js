// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 0)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		});
		$scope0_reason && _subscribe($input_promise__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_elide("a0", (err) => {
		_persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_escape(err.message)}${_el_resume($scope2_id, "a")}</em>`);
		writeScope($scope2_id, {});
	}, $scope0_id) }) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
