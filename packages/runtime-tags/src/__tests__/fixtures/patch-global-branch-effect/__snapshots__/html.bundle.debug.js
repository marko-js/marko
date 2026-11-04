// tags/site-footer.marko
const $template$1 = "<footer>foot</footer>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/site-footer.marko": "__tests__/tags/site-footer.marko,<footer>foot</footer>" });
var site_footer_default = _template("__tests__/tags/site-footer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<footer>foot</footer>");
});

// template.marko
const $template = "<html><body><!><main> </main><!></body></html>";
const $walks = "E%bD l%m";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E%bD l%;<html><body><!><main> </main><!></body></html>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<a href=#main>Skip to content</a>",
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}& b`)("b")};${/*@__PURE__*/ ((_w0) => `${_w0}<p></p>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_msg = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if ($global$1.meta.headings) {
			const $scope1_id = _scope_id();
			_html(`<a href=#main>Skip to content</a>${_el_mark($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_msg#0:5", 1, _filled_guard($scope0_reason, 0), ">input_msg");
			$cg__input_msg && _patch_render($scope1_id, "__tests__/template.marko_1_input_msg#0:5/setup");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $scope0_page, 1, 0, 0, ["__tests__/template.marko_1*shell"]);
	_html(`<main>${_text_mark($scope0_id, "#text/1", input.msg, 1, $scope0_reason, 0)}</main>`);
	_if(() => {
		if (!$global$1.meta.hideFooter) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			site_footer_default({});
			_patch_child_end();
			_html(`<p></p>${_el_mark($scope2_id, "#p/1")}`);
			_script($scope2_id, "__tests__/template.marko_2_input_msg#0:5", 1, _filled_guard($scope0_reason, 0), ">input_msg");
			$cg__input_msg && _patch_render($scope2_id, "__tests__/template.marko_2_input_msg#0:5/setup");
			_scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:6");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $scope0_page, 1, 0, 0, ["__tests__/template.marko_2*shell"]);
	_trailers("</body></html>");
	_fill_global_subscribe("__tests__/template.marko_0_$global_meta#5", $scope0_id);
	_scope($scope0_id, { input_msg: input.msg }, "__tests__/template.marko", 0, { input_msg: ["input.msg"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
