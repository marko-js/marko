// template.marko
_shells({
	a: "a;D%bD ;<main><!><p> </p></main>",
	a0: "a0; ;<script>\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute(\"nonce\");\n      main.dataset.connected = document.currentScript.isConnected; }\n    <\/script>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<script${_patch_attr($scope1_id, "a", "nonce", input.nonce, $scope0_owned, 2)}>
      { const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected; }
    <\/script>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 3)}</p></main>`);
	$scope0_reason && _scope($scope0_id, { f: input.nonce });
}, 1, 0);
