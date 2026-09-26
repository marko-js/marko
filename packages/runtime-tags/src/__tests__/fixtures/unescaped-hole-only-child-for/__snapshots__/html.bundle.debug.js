// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [];
	_html("<div><span>before</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(_html_resume($scope1_id, "#text/0", x));
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<span>after</span></div><button class=add>add</button>${_el_resume($scope0_id, "#button/1")}<button class=clear>clear</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { list }, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
