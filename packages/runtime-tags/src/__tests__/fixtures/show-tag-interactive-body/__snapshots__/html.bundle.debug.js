// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_show_start(visible, 0);
	let count = 0;
	_html(`<button id=inc>count ${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_show_end($scope0_id, "#text/3", visible, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		visible,
		count
	}, "__tests__/template.marko", 0, {
		visible: "1:6",
		count: "4:8"
	});
}, 1);
