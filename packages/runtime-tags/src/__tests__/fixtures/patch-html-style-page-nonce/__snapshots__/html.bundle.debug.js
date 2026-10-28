// template.marko
const $template = "<!><!><style></style>";
const $walks = "b%b b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%b ;<!><!><style></style>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_attrs#0:5; b ;<style>p.s { color: red }</style><style>p.t { color: green }</style>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<p>a</p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_page = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 0) {
			const $scope2_id = _scope_id();
			_html("<p>a</p>");
			_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_html(`<style${_attr_nonce()}>p.s { color: red }</style><style${_attrs({
				nonce: _patch_nonce(),
				...input.attrs
			}, "#style/1", $scope1_id, "style", 2, $scope0_reason, 1)}>p.t { color: green }</style>${_el_resume($scope1_id, "#style/1")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:5");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_attrs#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2", { "EventAttributes:#style/1": ["...input.attrs", "6:18"] });
			return 1;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<style${_attrs({
		nonce: _patch_nonce(),
		...input.attrs
	}, "#style/1", $scope0_id, "style", 2, $scope0_reason, 1)}>${_patch_text_content($scope0_id, "PatchTextContent:#style/1", `p.u { --page: ${_to_text(input.page)} }`, _escape_style, $scope0_reason, 0)}</style>${_el_resume($scope0_id, "#style/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#5");
	_scope($scope0_id, { input_attrs: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.attrs }, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		"EventAttributes:#style/1": ["...input.attrs", "8:16"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.attrs, !_server_guard($scope0_reason, 1)), $cg__input_page && _content_withhold(input.attrs));
}, 1);
