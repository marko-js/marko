// tags/card/index.marko
const $template = "<section><h2> </h2></section>";
const $walks = "D D m";
_shells({ b: "b;D D ;<section><h2> </h2></section>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2${_patch_attr_class($scope0_id, "a", input.title, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_reason, 0)}</h2>${_el_resume($scope0_id, "a")}</section>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`)(),
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({ title: "root" });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope2);
			card_default({ title: "branch" });
			_html(`<p>${_patch_text($scope1_id, "b", input.note, void 0, $scope0_reason, 2)}</p>`);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 1) && input.note,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a1", input.note);
}, 1);
