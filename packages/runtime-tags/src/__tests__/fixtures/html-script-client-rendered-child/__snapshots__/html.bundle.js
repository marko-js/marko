// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()}>
  { const main = document.querySelector("main");
  main.dataset.ran = (+main.dataset.ran || 0) + 1;
  main.dataset.nonce = document.currentScript.nonce; }
<\/script><style${_attrs({
		nonce: $global().cspNonce,
		...input.attrs
	}, "b", $scope0_id, "style")}>p { color: red }</style>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><button>show</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
