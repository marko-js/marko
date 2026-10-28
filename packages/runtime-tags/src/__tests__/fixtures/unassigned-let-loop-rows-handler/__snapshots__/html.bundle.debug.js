// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	let seen = "";
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "#text/1", i, $wg__input_items)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { i: "3:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/1", seen)}</p>`);
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
