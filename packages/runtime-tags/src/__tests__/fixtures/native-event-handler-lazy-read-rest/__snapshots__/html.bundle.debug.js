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
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "#button/0")}<button class=show>show</button>${_el_mark($scope0_id, "#button/1")}<button class=both>both</button>${_el_mark($scope0_id, "#button/2")}<div class=a>${_text_mark($scope0_id, "#text/3", a)}</div><div class=log>${_text_mark($scope0_id, "#text/4", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		state,
		state_a: state.a,
		state_b: state.b,
		rest
	}, "__tests__/template.marko", 0, {
		state: "3:6",
		state_a: ["state.a", "3:6"],
		state_b: ["state.b", "3:6"],
		rest: "4:16"
	});
}, 1);
