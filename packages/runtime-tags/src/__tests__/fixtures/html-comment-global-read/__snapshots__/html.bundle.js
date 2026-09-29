// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<!--${_escape_comment($global$1.x)} ${_escape_comment(count)}-->${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: count });
}, 1);
