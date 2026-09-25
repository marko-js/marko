// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const state = { box: { open: false } };
	const { box } = state;
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/0")}<button class=read>read</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_state_box#3");
	_script($scope0_id, "__tests__/template.marko_0_box#5");
	_scope($scope0_id, { state_box: state.box }, "__tests__/template.marko", 0, { state_box: ["state.box", "1:8"] });
}, 1);
