// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<em>loading</em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;E l%;<main><h1> </h1><!></main>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5,<em>closed</em>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_try($scope0_id, "b", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope5_id = _scope_id();
					_html(`<em>${_patch_text($scope5_id, "a", value, void 0, $scope0_reason, 3)}</em>`);
					_scope($scope5_id, {});
				}, 1, "a3");
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_html("<em>closed</em>");
				$scope0_page && _scope($scope4_id, {});
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a4", "a5"], $scope0_reason, 2);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_show || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a1", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		g: _source_if($scope0_reason, 2) && input.promise,
		i: $input_promise__closures,
		h: $input_show__closures
	});
}, 1, 0);
