// tags/site-footer.marko
const $template$1 = "<footer>foot</footer>";
const $walks$1 = "b";
_shells({ "__tests__/tags/site-footer.marko": "__tests__/tags/site-footer.marko,<footer>foot</footer>" });
var site_footer_default = _template_persisted("__tests__/tags/site-footer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<footer>foot</footer>");
}, 0, 0);

// template.marko
const $template = "<html><body><!><main> </main><!></body></html>";
const $walks = "E%bD l%m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E%bD l%;<html><body><!><main> </main><!></body></html>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<a href=#main>Skip to content</a>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if ($global$1.meta.headings) {
			const $scope1_id = _scope_id();
			_html("<a href=#main>Skip to content</a>");
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "3:6");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $scope0_page, $scope0_page, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<main>${_patch_text($scope0_id, "#text/1", input.msg, void 0, $scope0_reason, 0)}</main>`);
	_if(() => {
		if (!$global$1.meta.hideFooter) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/0", $childScope);
			site_footer_default({});
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "7:6");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $scope0_page, $scope0_page, void 0, void 0, ["__tests__/template.marko_2*shell"]);
	_trailers("</body></html>");
	_global_subscribe("__tests__/template.marko_0_$global_meta_headings#7/global", $scope0_id);
	_global_subscribe("__tests__/template.marko_0_$global_meta_hideFooter#8/global", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
