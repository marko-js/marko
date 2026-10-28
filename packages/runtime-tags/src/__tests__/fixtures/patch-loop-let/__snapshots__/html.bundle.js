// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a2: "a2 !a0;D bD l ;<li> <span> </span><button>+</button></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let votes = item.start;
		_html(`<li>${_text_resume($scope1_id, "a", item.label, 1, $scope0_reason, 0)}<span>${_text_resume($scope1_id, "b", votes)}</span><button>+</button>${_el_resume($scope1_id, "c")}</li>`);
		_script($scope1_id, "a0");
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va1", votes, 1);
		_scope($scope1_id, { h: votes });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
}, 1);
