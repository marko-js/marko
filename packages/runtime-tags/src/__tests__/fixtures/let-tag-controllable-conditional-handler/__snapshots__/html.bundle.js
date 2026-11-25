// template.marko
function $valueChange(next) {
	return console.log(next);
}
_resume("a0", $valueChange);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	let b = 1;
	_html(`<button>${_text_mark($scope0_id, "b", a)}|${_text_mark($scope0_id, "c", b, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: a,
		i: b,
		h: (input.on ? "log" : "") || void 0,
		j: (input.on ? "log" : $valueChange) || void 0
	});
}, 1);
