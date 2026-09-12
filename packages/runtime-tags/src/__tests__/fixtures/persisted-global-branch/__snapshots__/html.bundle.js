// tags/site-footer.marko
const $template = "<footer>foot</footer>";
_shells({ b: "b,<footer>foot</footer>" });
var site_footer_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<footer>foot</footer>");
}, 0, 0);

// template.marko
_shells({
	a: "a;E%bD l%;<html><body><!><main> </main><!></body></html>",
	a0: "a0,<a href=#main>Skip to content</a>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if ($global$1.meta.headings) {
			const $scope1_id = _scope_id();
			_html("<a href=#main>Skip to content</a>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $scope0_reason, $scope0_reason, void 0, void 0, ["a0"]);
	_html(`<main>${_patch_text($scope0_id, "b", input.msg, void 0, $scope0_owned, 0)}</main>`);
	_if(() => {
		if (!$global$1.meta.hideFooter) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "a", $childScope);
			site_footer_default({});
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c", 1, $scope0_reason, $scope0_reason, void 0, void 0, ["a1"]);
	_trailers("</body></html>");
	_global_subscribe("a2", $scope0_id);
	_global_subscribe("a3", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 1);
