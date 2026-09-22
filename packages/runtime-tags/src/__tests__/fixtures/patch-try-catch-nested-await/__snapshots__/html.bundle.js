// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1;D ;<strong> </strong>",
	a2: "a2;D l%;<em> </em><!><!>",
	a3: "a3;D l%;<em> </em><!><!>",
	a4: "a4;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", a, void 0, $scope0_reason, 1)}</em>`);
			_await($scope2_id, "b", input.b, (b) => {
				const $scope4_id = _scope_id();
				_html(`<strong>${_patch_text($scope4_id, "a", b, void 0, $scope0_reason, 2)}</strong>`);
				_scope($scope4_id, {});
			}, 1, "a1", 1);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, 1, "a3", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_elide("a5", (err) => {
		const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<span>${_text_resume($scope3_id, "a", err.message, $sg__err_message)}</span>`);
		_source_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.b,
		g: $input_b__closures,
		f: $input_a__closures
	});
}, 1, 0);
