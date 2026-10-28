// template.marko
_shells({ a: "a !a1;D l D ;<p> </p><button> </button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let uid = input.id;
	let n = 0;
	_html(`<p>${_text_resume($scope0_id, "a", uid + "-" + $global$1.x)}</p><button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: uid,
		h: n
	});
}, 1);
