// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = {
		open: false,
		nested: { depth: 1 }
	};
	let box = { count: 0 };
	_html(`<button class=write>write</button>${_el_resume($scope0_id, "a")}<button class=read>read</button>${_el_resume($scope0_id, "b")}<p>${_text_resume($scope0_id, "c", "")}</p>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: live,
		e: live.nested,
		f: box
	});
}, 1);
