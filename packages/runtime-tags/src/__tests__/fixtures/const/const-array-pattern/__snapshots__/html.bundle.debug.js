// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const [first, $second, ...others] = input.list;
	const second = void 0 !== $second ? $second : "dflt";
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}<div>${_text_resume($scope0_id, "#text/2", first, $sg__input_list)}|${_text_resume($scope0_id, "#text/3", second, $sg__input_list * 2)}|${_text_resume($scope0_id, "#text/4", others.join(","), $sg__input_list * 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "2:6" });
}, 1);
