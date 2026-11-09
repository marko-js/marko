// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let state = {
		a: 1,
		b: 2
	};
	const { a, ...rest } = state;
	let log = "";
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "a")}<button class=show>show</button>${_el_mark($scope0_id, "b")}<div class=log>${_text_mark($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: state,
		f: rest.a,
		g: log
	});
}, 1);
