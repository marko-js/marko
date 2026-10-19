// template.marko
_shells({
	a0: "a0,<b>static</b>",
	a1: "a1,<em>static</em>",
	a: "a;E l%b%;<main><p> </p><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_patch_text($scope0_id, "a", input.x, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		_scope_id();
		_html("<em>static</em>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a1");
	_try($scope0_id, "c", () => {
		_scope_reason();
		_scope_id();
		_html("<b>static</b>");
	}, void 0, (e) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<s>${_patch_text($scope4_id, "a", e.message)}</s>`);
		_scope($scope4_id, {});
	}, void 0, "a3", "a0", void 0, 2);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
}, 1);
