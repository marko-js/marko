// template.marko
_shells({ a: "a !a0;D b D ;<main><div></div><button> </button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_attr_content("a", $scope0_id, input.html === "a" ? frag_a_default : frag_b_default, 0, void 0, $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
}, 1);
