// tags/labeled.marko
var labeled_default = _template("__tests__/tags/labeled.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/labeled.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", on ? labeled_default : null, { name: "client" });
	const after = _id();
	_html(`<input${_attr("id", after)}><label${_attr("for", after)}>after</label>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
