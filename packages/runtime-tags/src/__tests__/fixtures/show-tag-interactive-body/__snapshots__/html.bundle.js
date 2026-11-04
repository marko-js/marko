// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_show_start(visible, 0);
	let count = 0;
	_html(`<button id=inc>count ${_text_mark($scope0_id, "c", count, 2)}</button>${_el_mark($scope0_id, "b")}`);
	_show_end($scope0_id, "d", visible, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: visible,
		f: count
	});
}, 1);
