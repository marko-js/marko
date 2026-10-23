// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let other = 0;
	_html(`<button id=bump>Bump</button>${_el_resume($scope0_id, "#button/0")}<div id=listener>never</div><div id=runs>never</div><div id=own>never</div>`);
	_script($scope0_id, "__tests__/template.marko_0_other#1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { other }, "__tests__/template.marko", 0, { other: "1:6" });
}, 1);
