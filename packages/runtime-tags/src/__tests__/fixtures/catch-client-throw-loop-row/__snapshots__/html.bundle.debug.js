// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_fail__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope2_id, "#text/1", item.fail ? boom() : item.id, $wg__input_items)}${_text_resume($scope2_id, "#text/2", n ? boom() : "", 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($wi__input_items && $for_content__item_fail__closures, _scope($scope2_id, {
				n,
				_: $wi__input_items && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:4", { n: "6:10" }), "__tests__/template.marko_2_item_fail#1:3/subscribe");
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message)}</b>`);
			_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, void 0, "__tests__/template.marko_3*content");
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_fail/5": $for_content__item_fail__closures }, "__tests__/template.marko", "4:2");
	}, "id", $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
