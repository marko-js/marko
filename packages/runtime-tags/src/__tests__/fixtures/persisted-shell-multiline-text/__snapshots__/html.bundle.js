// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0;bD ;<pre>line 1\nline 2\r\nline 3</pre><p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<pre>line 1
line 2
line 3</pre><p>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { e: input.note });
}, 1, 0);
