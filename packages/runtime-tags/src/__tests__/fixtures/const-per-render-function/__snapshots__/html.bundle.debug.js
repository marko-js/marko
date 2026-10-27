// tags/shower.marko
var shower_default = _template("__tests__/tags/shower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shown = "";
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}<output>${_text_resume($scope0_id, "#text/1", shown)}</output>`);
	_script($scope0_id, "__tests__/tags/shower.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/shower.marko", 0, { input: 0 });
});

// template.marko
let n = 0;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name__OR__input_value = _write_guard($scope0_reason, 0), $wg__input_name = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const uid = "u" + ++n;
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_name)}<input${_attr_input_value($scope0_id, "#input/2", input.value)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name)}>${_el_resume($scope0_id, "#input/2", $wg__input_name__OR__input_value)}`);
	shower_default({ getId: _resume(function() {
		return uid;
	}, "__tests__/template.marko_0/getId", $scope0_id) });
	_scope($scope0_id, { uid }, "__tests__/template.marko", 0, { uid: "2:8" });
}, 1);
