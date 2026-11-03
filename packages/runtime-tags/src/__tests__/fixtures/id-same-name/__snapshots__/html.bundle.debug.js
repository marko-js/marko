// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = _id();
	const $x = _id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<div><input${_attr("id", x)}><label${_attr("for", x)}>${_text_resume($scope0_id, "#text/4", n)}</label></div><div><input${_attr("id", $x)}></div>`);
	forOf([{ k: "a b" }, { k: "a]" }], (item) => {
		const $scope1_id = _scope_id();
		const y = _id();
		_html(`<input${_attr("id", y)}>`);
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
