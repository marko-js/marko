// tag-name.ts
var tag_name_default = "input";
function pick(value) {
	return value;
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { cb } = pick(input);
	_dynamic_tag($scope0_id, "#text/0", tag_name_default, { valueChange: cb }, 0, 0, $wg__input);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { cb }, "__tests__/template.marko", 0, { cb: "4:10" });
}, 1);
