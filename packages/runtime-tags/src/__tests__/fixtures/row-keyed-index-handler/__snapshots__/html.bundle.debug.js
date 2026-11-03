// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<button class=r>${_escape(item.id)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item_v: item?.v,
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			item_v: ["item.v", "2:6"],
			i: "2:12"
		});
	}, "id", $scope0_id, "#text/0", $wg__input_items, $wg__input_items, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
