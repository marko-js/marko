// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_fail__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope2_id, "b", item.fail ? boom() : item.id, $wg__input_items)}${_text_resume($scope2_id, "c", "", 2)}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_subscribe($wi__input_items && $for_content__item_fail__closures, _scope($scope2_id, {
				e: n,
				_: $wi__input_items && _scope_with_id($scope1_id)
			}), "a1");
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "a", err.message, $wg__err_message)}</b>`);
			_write_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, void 0, "a2");
		$wi__input_items && _scope($scope1_id, { f: $for_content__item_fail__closures });
	}, "id", $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {});
}, 1);
