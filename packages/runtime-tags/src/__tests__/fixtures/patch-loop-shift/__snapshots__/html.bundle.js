// template.marko
_shells({
	a: "a !a3;D b%bD l Db%;<main><ul></ul><!><p> </p><button>Count <!></button></main>",
	a1: "a1;D ;<aside> </aside>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "a", item.label, 1, $scope0_reason, 0)}</li>`);
		_scope($scope2_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside>${_text_resume($scope1_id, "a", input.promo, 1, $scope0_reason, 1)}</aside>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`<p>${_text_resume($scope0_id, "c", input.note, 1, $scope0_reason, 2)}</p><button>Count ${_text_resume($scope0_id, "e", count, 2)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, { k: count });
}, 1);
