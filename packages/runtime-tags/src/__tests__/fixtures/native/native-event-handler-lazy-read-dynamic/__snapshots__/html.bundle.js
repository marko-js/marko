// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let other = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}<button class=bump>bump</button>${_el_resume($scope0_id, "b")}<button class=act>act</button>${_el_resume($scope0_id, "c")}<div class=state>${_text_resume($scope0_id, "d", enabled)}:${_text_resume($scope0_id, "e", other, 2)}</div><div class=log>${_text_resume($scope0_id, "f", log)}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: enabled,
		h: other,
		i: log
	});
}, 1);
