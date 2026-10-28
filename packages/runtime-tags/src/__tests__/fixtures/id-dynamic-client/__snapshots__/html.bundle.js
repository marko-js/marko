// tags/labeled.marko
var labeled_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", labeled_default, { name: "a" });
	_dynamic_tag($scope0_id, "c", labeled_default, { name: "b" });
	const own = _id();
	_html(`<input${_attr("id", own)}><label${_attr("for", own)}>own</label>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: on });
}, 1);
