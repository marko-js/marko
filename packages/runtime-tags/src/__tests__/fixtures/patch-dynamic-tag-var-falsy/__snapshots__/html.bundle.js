// template.marko
_shells({ a: "a !a1;b1b D ;<!><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", input.tag, {}, 2, 0, 0, 1, $scope0_reason, 0, 0, void 0, void 0, "a0");
	_var($scope0_id, "b", $inputtag_scope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", clicks)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: clicks,
		i: el
	});
}, 1);
