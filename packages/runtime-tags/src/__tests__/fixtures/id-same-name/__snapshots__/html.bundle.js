// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = _id();
	const $x = _id();
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<div><input${_attr("id", x)}><label${_attr("for", x)}>${_text_resume($scope0_id, "e", n)}</label></div><div><input${_attr("id", $x)}></div>`);
	forOf([{ k: "a b" }, { k: "a]" }], (item) => {
		_scope_id();
		const y = _id();
		_html(`<input${_attr("id", y)}>`);
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: n });
}, 1);
