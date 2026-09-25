// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const key = "open";
	const live = {
		open: false,
		items: [{ done: false }]
	};
	_html(`<button class=write>write</button>${_el_resume($scope0_id, "a")}<button class=read>read</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: key,
		d: live
	});
}, 1);
