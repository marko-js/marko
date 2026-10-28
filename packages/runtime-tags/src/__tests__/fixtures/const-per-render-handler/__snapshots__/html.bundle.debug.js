// template.marko
let n = 0;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = "u" + ++n;
	let shown = "";
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 2))}</label>${_el_resume($scope0_id, "#label/0", _write_guard($scope0_reason, 1))}<input${_attr_input_value($scope0_id, "#input/2", input.value)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name)}>${_el_resume($scope0_id, "#input/2", _write_guard($scope0_reason, 0))}<button>show</button>${_el_resume($scope0_id, "#button/3")}<output>${_text_resume($scope0_id, "#text/4", shown)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { uid }, "__tests__/template.marko", 0, { uid: "2:8" });
}, 1);
