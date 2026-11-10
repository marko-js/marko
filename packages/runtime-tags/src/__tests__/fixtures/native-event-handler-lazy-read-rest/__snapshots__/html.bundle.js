// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = {
		a: 1,
		b: 2
	};
	const { a, ...rest } = state;
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "a")}<button class=show>show</button>${_el_mark($scope0_id, "b")}<button class=both>both</button>${_el_mark($scope0_id, "c")}<div class=a>${_text_mark($scope0_id, "d", a)}</div><div class=log>${_text_mark($scope0_id, "e", "")}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: state,
		g: state.a,
		h: state.b,
		i: rest
	});
}, 1);
