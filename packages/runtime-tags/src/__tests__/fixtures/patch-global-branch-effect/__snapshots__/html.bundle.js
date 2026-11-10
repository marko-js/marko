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
	a2: "a2; ;<a href=#main>Skip to content</a>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}& b`)("b")};${/*@__PURE__*/ ((_w0) => `${_w0}<p></p>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_msg = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if ($global$1.meta.headings) {
			const $scope1_id = _scope_id();
			_html(`<a href=#main>Skip to content</a>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 0));
			$cg__input_msg && _patch_render($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $scope0_page, 1, 0, 0, ["a2"]);
	_html(`<main>${_text_mark($scope0_id, "b", input.msg, 1, $scope0_reason, 0)}</main>`);
	_if(() => {
		if (!$global$1.meta.hideFooter) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			site_footer_default({});
			_patch_child_end();
			_html(`<p></p>${_el_mark($scope2_id, "b")}`);
			_script($scope2_id, "a4", 1, _filled_guard($scope0_reason, 0));
			$cg__input_msg && _patch_render($scope2_id, "a5");
			_scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $scope0_page, 1, 0, 0, ["a3"]);
	_trailers("</body></html>");
	_fill_global_subscribe("a6", $scope0_id);
	_scope($scope0_id, { f: input.msg }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
