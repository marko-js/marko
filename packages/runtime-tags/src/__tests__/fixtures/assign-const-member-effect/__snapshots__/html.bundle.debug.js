// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = { open: false };
	let count = 0;
	_html(`<span>${live.open ? "open" : "closed"}</span><button>open</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_live#2_count#3");
	_scope($scope0_id, {
		live,
		count
	}, "__tests__/template.marko", 0, {
		live: "1:8",
		count: "2:6"
	});
}, 1);
