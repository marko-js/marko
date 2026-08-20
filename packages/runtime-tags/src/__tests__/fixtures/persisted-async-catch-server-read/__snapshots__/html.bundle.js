// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_persisted_reason();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 1)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		}, void 0, "a1", 1);
		$scope0_reason && _subscribe($input_promise__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id), { catch: attrTag({ content: _content_elide("a3", (err) => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_escape(input.title)}${_el_resume($scope1_id, "a")}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		d: input.title,
		f: $input_title__closures,
		g: $input_promise__closures
	});
}, 1, 0);
