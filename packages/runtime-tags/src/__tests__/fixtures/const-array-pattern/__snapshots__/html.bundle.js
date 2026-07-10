// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_list = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const [first, $second, ...others] = input.list;
	const second = void 0 !== $second ? $second : "dflt";
	_html(`<button>inc <!>${_escape(1)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div>${_escape(first)}${_el_resume($scope0_id, "c", $sg__input_list)}|${_sep($sg__input_list)}${_escape(second)}${_el_resume($scope0_id, "d", $sg__input_list)}|${_sep($sg__input_list)}${_escape(others.join(","))}${_el_resume($scope0_id, "e", $sg__input_list)}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { n: void 0 });
	_resume_branch($scope0_id);
}, 1);
