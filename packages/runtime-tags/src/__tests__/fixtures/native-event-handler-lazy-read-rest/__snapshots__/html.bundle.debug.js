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
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "#button/0")}<button class=show>show</button>${_el_resume($scope0_id, "#button/1")}<div class=a>${_text_resume($scope0_id, "#text/2", a)}</div><div class=log>${_text_resume($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		state_a: state.a,
		state_b: state.b,
		rest
	}, "__tests__/template.marko", 0, {
		state_a: ["state.a", "2:6"],
		state_b: ["state.b", "2:6"],
		rest: "3:16"
	});
}, 1);
