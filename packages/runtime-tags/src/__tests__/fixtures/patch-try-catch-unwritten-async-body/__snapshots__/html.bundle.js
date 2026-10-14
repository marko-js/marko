// template.marko
_shells({
	a0: "a0,<em>static</em>",
	a1: "a1,<em>static</em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;E l%;<main><p> </p><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", $global$1.promise, (v) => {
			_scope_id();
			_html("<em>static</em>");
		}, 1, "a0");
		_fill_global_subscribe("a3", $scope1_id);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, void 0, "a4", "a2");
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
}, 1);
