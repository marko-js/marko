// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>Id is ${_text_resume($scope0_id, "#text/0", input.id, $wg__input_id * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = child_default;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", tagName, { id: "dynamic" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { tagName }, "__tests__/template.marko", 0, { tagName: "3:6" });
}, 1);
