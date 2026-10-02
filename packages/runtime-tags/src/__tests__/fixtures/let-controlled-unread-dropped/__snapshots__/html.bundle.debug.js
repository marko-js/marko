// template.marko
function makeHandler() {
	return () => {};
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let y = input.y;
	makeHandler();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</span>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let made = item.make();
		_html(`<span>${_text_resume($scope1_id, "#text/0", item.name, $wg__input_items)}</span>`);
		_write_if($scope0_reason, 2) && _scope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/1", $wg__input_items, $wg__input_items, $wg__input_items, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
