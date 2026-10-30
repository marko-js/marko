// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let other = 0;
	_html(`<button id=bump>Bump</button>${_el_resume($scope0_id, "a")}<div id=listener>never</div><div id=runs>never</div><div id=own>never</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { b: other });
}, 1);
