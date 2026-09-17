// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shown = 0;
	_html(`<button id=guess>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}<button id=set>set</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: shown });
}, 1);
