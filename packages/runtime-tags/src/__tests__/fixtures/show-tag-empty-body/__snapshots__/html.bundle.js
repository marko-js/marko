// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let reveal = false;
	_html(`<button>reveal</button>${_el_mark($scope0_id, "a")}`);
	_show_start(reveal);
	_html(_text_mark($scope0_id, "c", input.note, _write_guard($scope0_reason, 0)));
	_show_end($scope0_id, "d", reveal);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: reveal });
}, 1);
