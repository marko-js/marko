// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "a")}<button class=show>show</button>${_el_resume($scope0_id, "b")}<div class=log>${_text_resume($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: count,
		e: log
	});
}, 1);
