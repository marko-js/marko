// template.marko
const $template = "<main><input><p> </p></main>";
const $walks = "D bD m";
function read(reads, value) {
	reads.count++;
	return value;
}
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D bD ;<main><input><p> </p></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const reads = { count: 0 };
	_html(`<main><input${_attr_input_value($scope0_id, "#input/0", read(reads, input.value), void 0, 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0", _mask_group($scope0_reason, 0))}<p>${_text_resume($scope0_id, "#text/1", reads.count, void 0, 0, 0)}</p></main>`);
	_scope($scope0_id, { reads: _unfilled_if($scope0_reason, 0) && reads }, "__tests__/template.marko", 0, { reads: "5:8" });
}, 1);
