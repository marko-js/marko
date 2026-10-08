// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a6;D ;<p> </p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_value($scope1_id, "a1", item.name);
		_filled_guard($scope0_reason, 0) && _patch_value($scope1_id, "a2", item.id);
		_html(`<p>${_text_resume($scope1_id, "a", item.name + "/" + item.id + "#0")}</p>`);
		_scope($scope1_id, {
			d: item.name,
			e: item.id,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "a4", count, 1);
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);
