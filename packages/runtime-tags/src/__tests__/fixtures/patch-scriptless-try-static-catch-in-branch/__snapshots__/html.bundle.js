// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<p>oops</p>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a3", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a2");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
				$scope0_page && _resume_branch($scope2_id);
			}, $scope1_id), { catch: attrTag({ content: _content_shell("a1", $scope1_id) }) });
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.promise,
		f: $input_promise__closures
	});
}, 1, 0);
