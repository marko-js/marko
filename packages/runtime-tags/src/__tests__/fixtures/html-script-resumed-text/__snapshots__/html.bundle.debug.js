// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let code = "";
	let type = "text/plain";
	_html(`<main><button>go</button>${_el_resume($scope0_id, "#button/0")}<script${_attr_nonce()}>${_escape_script(code && `document.querySelector("main").dataset.a = "${code}"`)}<\/script>${_el_resume($scope0_id, "#script/1")}<script${_attr_nonce()}${_attr("type", type)}>${_escape_script(`document.querySelector("main").dataset.b = ${_to_text(JSON.stringify(code))}`)}<\/script>${_el_resume($scope0_id, "#script/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
