// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_note = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let reveal = false;
	_html(`<button>reveal</button>${_el_resume($scope0_id, "a")}`);
	_show_start(reveal, 1);
	_html(`${_escape(input.note) || _sep($sg__input_note)}${_el_resume($scope0_id, "c", $sg__input_note)}`);
	_show_end($scope0_id, "e", reveal);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { i: reveal });
	_resume_branch($scope0_id);
}, 1);
