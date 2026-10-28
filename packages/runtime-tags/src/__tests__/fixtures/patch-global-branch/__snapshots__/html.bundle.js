// tags/site-footer.marko
const $template = "<footer>foot</footer>";
const $setup = [[], []];
_shells({ b: "b,<footer>foot</footer>" });
var site_footer_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<footer>foot</footer>");
});

// template.marko
_shells({
	a: "a;E%bD l%;<html><body><!><main> </main><!></body></html>",
	a0: "a0,<a href=#main>Skip to content</a>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if ($global$1.meta.headings) {
			const $scope1_id = _scope_id();
			_html("<a href=#main>Skip to content</a>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $scope0_page, 1, 0, 0, ["a0"]);
	_html(`<main>${_text_resume($scope0_id, "b", input.msg, 1, $scope0_reason, 0)}</main>`);
	_if(() => {
		if (!$global$1.meta.hideFooter) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			site_footer_default({});
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c", 1, $scope0_page, 1, 0, 0, ["a1"]);
	_trailers("</body></html>");
	_fill_global_subscribe("a2", $scope0_id);
	_scope($scope0_id, {});
}, 1);
