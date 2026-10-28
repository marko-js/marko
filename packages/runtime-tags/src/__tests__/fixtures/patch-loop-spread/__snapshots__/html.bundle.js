// template.marko
_shells({
	a: "a !a2; b D ;<ul></ul><button> </button>",
	a1: "a1 !a0; D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${_attrs(item.attrs, "a", $scope1_id, "li", void 0, $scope0_reason, 0)}>${_text_resume($scope1_id, "b", item.id, void 0, $scope0_reason, 0)}</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {});
	}, (item) => item.id, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { g: count });
}, 1);
