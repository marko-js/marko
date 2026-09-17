// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1,<strong>more loading</strong>",
	a2: "a2;D ;<em> </em>",
	a3: "a3,<em>loading</em>",
	a4: "a4;D ;<strong> </strong>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;D ;<em> </em>",
	a7: "a7;b%;<!><!><!>",
	a: "a;E l%b%;<main><h1> </h1><!><!></main>",
	a8: "a8;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_more = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_morePromise__closures = /* @__PURE__ */ new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_try($scope0_id, "b", _content_resume("a7", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_patch_text($scope5_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope5_id, {});
		}, 1, "a6", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a3", $scope0_id) }) }, 1);
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", _content_resume("a5", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "a", input.morePromise, (value) => {
					const $scope7_id = _scope_id();
					_html(`<strong>${_patch_text($scope7_id, "a", value, void 0, $scope0_reason, 4)}</strong>`);
					_scope($scope7_id, {});
				}, 1, "a4");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_morePromise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
				$scope0_page && _resume_branch($scope3_id);
			}, $scope2_id), { placeholder: attrTag({ content: _content_shell("a1", $scope2_id) }) });
			$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_more, $sg__input_more, void 0, void 0, ["a8"], $scope0_reason, 3);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		i: _source_if($scope0_reason, 3) && input.morePromise,
		j: $input_promise__closures,
		k: $input_morePromise__closures
	});
}, 1, 0);
