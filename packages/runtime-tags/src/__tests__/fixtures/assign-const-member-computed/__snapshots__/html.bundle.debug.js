// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const key = "open";
	const live = {
		open: false,
		items: [{ done: false }]
	};
	_html(`<button class=write>write</button>${_el_resume($scope0_id, "#button/0")}<button class=read>read</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		key,
		live
	}, "__tests__/template.marko", 0, {
		key: "1:8",
		live: "2:8"
	});
}, 1);
