// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let uid = input.id;
	let n = 0;
	_html(`<p>${_escape(uid + "-" + $global$1.x)}</p><button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: n });
}, 1);
