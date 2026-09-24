// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<a href=#x>link</a>${_el_resume($scope0_id, "a")}<button id=mark>mark</button>${_el_resume($scope0_id, "b")}<button id=inc>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}<p id=t>unmarked</p>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, { e: n });
}, 1);
