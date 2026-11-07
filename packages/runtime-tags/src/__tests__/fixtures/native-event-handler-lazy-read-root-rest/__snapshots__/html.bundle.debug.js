// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = {
		a: 1,
		b: 2
	};
	const { a, ...rest } = state;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "#button/0")}<button class=show>show</button>${_el_mark($scope0_id, "#button/1")}<div class=log>${_text_mark($scope0_id, "#text/2", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		state,
		rest_a: rest.a,
		log
	}, "__tests__/template.marko", 0, {
		state: "3:6",
		rest_a: ["rest.a", "4:16"],
		log: "5:6"
	});
}, 1);
