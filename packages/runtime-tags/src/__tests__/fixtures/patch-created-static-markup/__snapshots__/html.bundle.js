// template.marko
_shells({
	a: "a; ;<main></main>",
	a1: "a1; bD lD ;<ul></ul><div> </div><p> </p>",
	a0: "a0,<li>static</li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of([1, 2], (x) => {
				_scope_id();
				_html("<li>static</li>");
			}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a0", 0, 0);
			_html(`</ul>${_el_resume($scope1_id, "a")}<div>${_patch_html($scope1_id, "b", "<b>hi</b>", void 0, 0, 0)}</div><p>${_patch_text($scope1_id, "c", input.show, void 0, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a2");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
