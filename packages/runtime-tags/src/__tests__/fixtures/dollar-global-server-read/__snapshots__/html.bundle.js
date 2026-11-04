// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "c", input.name + $global$1.suffix, _write_guard($scope0_reason, 0))}</p>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: n });
}, 1);
