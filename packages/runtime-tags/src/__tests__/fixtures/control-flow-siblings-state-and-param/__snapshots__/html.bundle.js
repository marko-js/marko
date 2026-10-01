// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<span>if input</span>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
	_html("<div>");
	_if(() => {}, $scope0_id, "c", 1, 1, 1, "</div>", 1);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "a", item, $wg__input_items)}</p>`);
		_write_if($scope0_reason, 1) && _scope($scope3_id, {});
	}, 0, $scope0_id, "d", $wg__input_items, $wg__input_items, $wg__input_items, 0, 1);
	_for_of(["x"], (item) => {
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "a", item)}</p>`);
		_scope($scope4_id, {});
	}, 0, $scope0_id, "e", 1, 1, 1, 0, 1);
	const $show = input.show;
	_show_start($show);
	_html("<span>show input</span>");
	_show_end($scope0_id, "g", $show, $wg__input_show, $wg__input_show, 0, 1);
	_show_start(open);
	_html("<span>show state</span>");
	_show_end($scope0_id, "i", open, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { n: open });
}, 1);
