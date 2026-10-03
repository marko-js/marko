// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = {
		open: false,
		nested: { depth: 1 }
	};
	let box = { count: 0 };
	let log = "";
	_html(`<button class=write>write</button>${_el_resume($scope0_id, "#button/0")}<button class=read>read</button>${_el_resume($scope0_id, "#button/1")}<p>${_text_resume($scope0_id, "#text/2", log)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_live_nested#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		live,
		live_nested: live.nested,
		box
	}, "__tests__/template.marko", 0, {
		live: "1:8",
		live_nested: ["live.nested", "1:8"],
		box: "2:6"
	});
}, 1);
