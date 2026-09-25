// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = { open: false };
	let count = 0;
	_html(`<span>${live.open ? "open" : "closed"}</span><button>open</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: live,
		d: count
	});
}, 1);
