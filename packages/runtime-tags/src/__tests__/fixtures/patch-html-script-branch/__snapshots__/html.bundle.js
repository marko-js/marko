// template.marko
_shells({
	a: "a !;D%bD ;<main><!><p> </p></main>",
	a1: "a1; ;<script>\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute(\"nonce\");\n      main.dataset.connected = document.currentScript.isConnected; }\n    <\/script>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<script${_attr("nonce", input.nonce, $scope1_id, "aa$nonce", $scope0_reason, 1)}>
      { const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected; }
    <\/script>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 1))}`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", input.note, void 0, $scope0_reason, 2)}</p></main>`);
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.nonce }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.nonce, !_server_guard($scope0_reason, 1));
}, 1);
