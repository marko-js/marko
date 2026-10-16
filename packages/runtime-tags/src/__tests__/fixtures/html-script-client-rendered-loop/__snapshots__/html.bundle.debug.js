// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html(`<main><button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", item)}</p><script${_attr_nonce()}>
      { const main = document.querySelector("main");
      main.dataset.ran = (main.dataset.ran || "") + document.currentScript.previousElementSibling.textContent; }
    <\/script>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
