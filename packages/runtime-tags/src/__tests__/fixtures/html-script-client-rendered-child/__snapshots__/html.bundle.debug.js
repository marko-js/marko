// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()}>
  { const main = document.querySelector("main");
  main.dataset.ran = (+main.dataset.ran || 0) + 1;
  main.dataset.nonce = document.currentScript.nonce; }
<\/script><style${_attrs({
		nonce: $global().cspNonce,
		...input.attrs
	}, "#style/1", $scope0_id, "style")}>p { color: red }</style>${_el_resume($scope0_id, "#style/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_attrs#4");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0, { "EventAttributes:#style/1": ["...input.attrs", "6:16"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<main><button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			child_default({ attrs: { "data-x": "1" } });
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
