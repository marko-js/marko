// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a4: "a4",
	a5: "a5 !a0; D%b%;<button><!><!></button>",
	a: "a;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_fail__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope2_id, "b", item.fail ? boom() : item.id, 1, $scope0_reason, 0)}${_text_resume($scope2_id, "c", "", 2)}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "a1" : "a2");
			_patch_fill($scope2_id, "va3", n, 1);
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_fail__closures, _scope($scope2_id, {
				e: n,
				_: $wi__input_items && _scope_with_id($scope1_id)
			}), $cg__input_items && "a2");
		}, void 0, (err) => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
			_scope($scope3_id, {});
		}, 0, "a4", "a5", 0, 1, 1);
		$wi__input_items && _scope($scope1_id, { f: _unfilled_if($scope0_reason, 0) && $for_content__item_fail__closures });
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a6", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
