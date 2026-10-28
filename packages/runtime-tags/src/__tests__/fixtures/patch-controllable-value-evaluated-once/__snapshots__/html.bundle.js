// template.marko
function read(reads, value) {
	reads.count++;
	return value;
}
_shells({ a: "a;D bD ;<main><input><p> </p></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const reads = { count: 0 };
	_html(`<main><input${_attr_input_value($scope0_id, "a", read(reads, input.value), void 0, 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<p>${_text_resume($scope0_id, "b", reads.count, void 0, 0, 0)}</p></main>`);
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && reads });
}, 1);
