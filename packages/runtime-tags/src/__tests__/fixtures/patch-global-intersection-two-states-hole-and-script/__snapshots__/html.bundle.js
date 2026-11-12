// template.marko
_shells({ a: "a !a1; D%b%lD ;<button><!><!></button><p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let a = 1;
	let b = 2;
	_html(`<button>${_text_mark($scope0_id, "b", a)}${_text_mark($scope0_id, "c", b, 2)}</button>${_el_mark($scope0_id, "a")}<p>${_text_mark($scope0_id, "d", 3 + $global$1.x)}</p>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2");
	_scope($scope0_id, {
		e: a,
		f: b
	});
}, 1);
