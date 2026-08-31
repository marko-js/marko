// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_list = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const [first, $second, ...others] = input.list;
	const second = void 0 !== $second ? $second : "dflt";
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}<div>${_text_resume($scope0_id, "c", first, $sg__input_list)}|${_text_resume($scope0_id, "d", second, $sg__input_list * 2)}|${_text_resume($scope0_id, "e", others.join(","), $sg__input_list * 2)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { n });
	_resume_branch($scope0_id);
}, 1);
