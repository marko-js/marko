// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<span>if input</span>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/1", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
	_html("<div>");
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html("<span>if state</span>");
			_scope($scope2_id, {}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#div/2", 1, 1, 1, "</div>", 1);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", item, $wg__input_items)}</p>`);
		_write_if($scope0_reason, 1) && _scope($scope3_id, {}, "__tests__/template.marko", "9:2");
	}, 0, $scope0_id, "#text/3", $wg__input_items, $wg__input_items, 0, 0, 1);
	_for_of(open ? ["x", "y"] : ["x"], (item) => {
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "#text/0", item)}</p>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "10:2");
	}, 0, $scope0_id, "#text/4", 1, 1, 0, 0, 1);
	const $show = input.show;
	_show_start($show, 0);
	_html("<span>show input</span>");
	_show_end($scope0_id, "#text/6", $show, $wg__input_show, 0, 0, 1);
	_show_start(open, 0);
	_html("<span>show state</span>");
	_show_end($scope0_id, "#text/8", open, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
