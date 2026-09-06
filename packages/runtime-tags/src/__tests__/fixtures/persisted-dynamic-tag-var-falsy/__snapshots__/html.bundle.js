// template.marko
_shells({ a: "a !a1;b1b D ;<!><!><button> </button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $tag = input.tag;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, "a0", $scope0_owned, 0);
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", $tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $inputtag_scope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", clicks)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		h: clicks,
		i: el
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "i", el);
}, 1, 1);
