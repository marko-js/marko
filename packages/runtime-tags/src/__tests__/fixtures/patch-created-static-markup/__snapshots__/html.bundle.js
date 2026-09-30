// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0; bD lD ;<ul></ul><div> </div><p> </p>",
	a1: "a1,<li>static</li>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of([1, 2], (x) => {
				_scope_id();
				_html("<li>static</li>");
			}, 0, $scope1_id, "a", 1, 1, 0, void 0, void 0, "a1", 0, 0);
			_html(`</ul>${_el_resume($scope1_id, "a")}<div>${_patch_html($scope1_id, "b", "<b>hi</b>", void 0, 0, 0)}</div><p>${_patch_text($scope1_id, "c", input.show, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
