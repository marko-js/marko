// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html(`<main><button>add</button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", item)}</p><script${_attr_nonce()}>
      { const main = document.querySelector("main");
      main.dataset.ran = (main.dataset.ran || "") + document.currentScript.previousElementSibling.textContent; }
    <\/script>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: items });
}, 1);
