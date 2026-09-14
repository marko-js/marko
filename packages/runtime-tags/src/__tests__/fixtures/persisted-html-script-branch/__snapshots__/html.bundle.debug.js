// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D%bD m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D%bD ;<main><!><p> </p></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<script>\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute(\"nonce\");\n      main.dataset.connected = document.currentScript.isConnected; }\n    <\/script>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<script${_patch_attr($scope1_id, "#script/0", "nonce", input.nonce, $scope0_reason, 2)}>
      { const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected; }
    <\/script>${_el_resume($scope1_id, "#script/0")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.note, void 0, $scope0_reason, 3)}</p></main>`);
	$scope0_page && _scope($scope0_id, { input_nonce: _source_if($scope0_reason, 1) && input.nonce }, "__tests__/template.marko", 0, { input_nonce: ["input.nonce"] });
}, 1, 0);
