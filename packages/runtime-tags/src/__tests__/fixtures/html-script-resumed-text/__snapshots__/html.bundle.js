// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let code = "";
	_html(`<main><button>go</button>${_el_resume($scope0_id, "a")}<script${_attr_nonce()}>${_escape_script(code)}<\/script>${_el_resume($scope0_id, "b")}<script${_attr_nonce()}${_attr("type", "text/plain")}>${_escape_script(`document.querySelector("main").dataset.b = ${_to_text(JSON.stringify(code))}`)}<\/script>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
