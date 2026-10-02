// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<div id=out></div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: input.greeting,
		e: count
	});
}, 1);
