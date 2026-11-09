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
	_html(`<button class=write>write</button>${_el_mark($scope0_id, "#button/0")}<button class=read>read</button>${_el_mark($scope0_id, "#button/1")}<p>${_text_mark($scope0_id, "#text/2", log)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		live,
		box
	}, "__tests__/template.marko", 0, {
		live: "1:8",
		box: "2:6"
	});
}, 1);
