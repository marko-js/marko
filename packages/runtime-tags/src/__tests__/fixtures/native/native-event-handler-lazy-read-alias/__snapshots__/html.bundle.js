// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = {
		n: 0,
		tag: "x"
	};
	const { n } = state;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "a")}<button class=show>show</button>${_el_resume($scope0_id, "b")}<div class=n>${_text_resume($scope0_id, "c", n)}</div><div class=log>${_text_resume($scope0_id, "d", log)}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: state.n,
		g: state.tag,
		h: log
	});
}, 1);
