// template.marko
let n = 0;
_shells({
	a: "a; ;<ul></ul>",
	a0: "a0;D%c%;<li><!>:<!></li>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.id, void 0, $scope0_reason, 0)}:${_patch_text($scope1_id, "b", ++n, 2, 0, 0)}</li>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
