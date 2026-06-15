// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const [first, $second, ...others] = input.list;
	const second = void 0 !== $second ? $second : "dflt";
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<div>${_escape(first)}${_el_resume($scope0_id, "#text/2", $sg__input_list)}|${_sep($sg__input_list)}${_escape(second)}${_el_resume($scope0_id, "#text/3", $sg__input_list)}|${_sep($sg__input_list)}${_escape(others.join(","))}${_el_resume($scope0_id, "#text/4", $sg__input_list)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_n");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "2:6" });
	_resume_branch($scope0_id);
}, 1);
