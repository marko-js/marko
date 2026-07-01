// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let reveal = false;
	_html(`<button>reveal</button>${_el_resume($scope0_id, "a")}`);
	_show_start(reveal, 1);
	_html(`${_escape(input.note)}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}`);
	_show_end($scope0_id, "d", reveal);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { h: reveal });
	_resume_branch($scope0_id);
}, 1);
