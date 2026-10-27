// template.marko
let n = 0;
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { uid } = { uid: "u" + ++n };
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 2))}</label>${_el_resume($scope0_id, "a", _write_guard($scope0_reason, 1))}<input${_attr_input_value($scope0_id, "c", input.value)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name)}>${_el_resume($scope0_id, "c", _write_guard($scope0_reason, 0))}<button>show</button>${_el_resume($scope0_id, "d")}<output>${_text_resume($scope0_id, "e", "")}</output>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { l: uid });
}, 1);
