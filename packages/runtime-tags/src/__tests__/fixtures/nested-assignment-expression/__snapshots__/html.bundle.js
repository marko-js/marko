// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clickCount)}</button>${_el_resume($scope0_id, "a")}used to be <span>${_text_resume($scope0_id, "c", 0)}</span> which should be the same as <span>${_text_resume($scope0_id, "d", 0)}</span>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: clickCount });
}, 1);
