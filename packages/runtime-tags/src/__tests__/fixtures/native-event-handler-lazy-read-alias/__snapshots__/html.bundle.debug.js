// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = {
		n: 0,
		tag: "x"
	};
	const { n } = state;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "#button/0")}<button class=show>show</button>${_el_resume($scope0_id, "#button/1")}<div class=n>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</div><div class=log>${_escape(log)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_state_tag_n");
	_script($scope0_id, "__tests__/template.marko_0_state_n_state_tag");
	writeScope($scope0_id, {
		state_n: state.n,
		state_tag: state.tag,
		log
	}, "__tests__/template.marko", 0, {
		state_n: ["state.n", "2:6"],
		state_tag: ["state.tag", "2:6"],
		log: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
