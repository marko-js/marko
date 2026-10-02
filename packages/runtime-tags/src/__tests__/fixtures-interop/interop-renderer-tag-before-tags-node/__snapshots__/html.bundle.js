// legacy-greeting.js
function legacy_greeting_default(_input, out) {
	out.write("<b>legacy</b>");
}

// template.marko
legacy_greeting_default._ ??= legacy_greeting_default;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let count = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: show,
		d: count
	});
}, 1);
