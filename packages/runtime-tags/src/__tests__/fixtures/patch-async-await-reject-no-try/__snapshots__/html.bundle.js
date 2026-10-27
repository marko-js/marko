// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "a", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
		$scope0_page && _scope($scope1_id, {});
	}, 1, "a0", 1);
	_html("</main>");
}, 1);
