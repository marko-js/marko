// template.marko
_shells({ a: "a !a1;b1b D ;<!><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", input.tag, {}, void 0, void 0, void 0, "a0", 2, $scope0_reason, 0);
	_var($scope0_id, "b", $inputtag_scope, "a0", void 0, 1);
	_html(`<button>${_text_resume($scope0_id, "d", clicks)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va2", clicks, 1);
	$scope0_page && _scope($scope0_id, {
		h: clicks,
		i: el
	});
}, 1);
