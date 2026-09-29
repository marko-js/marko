// tags/widget/index.marko
_shells({
	b0: "b0,<em>bad</em>",
	b1: "b1,<em>ok</em>",
	b: "b;b%;<!><!><!>"
});
var widget_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		_scope_id();
		_html("<em>ok</em>");
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>bad</em>");
	}, void 0, "b0", "b1");
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			widget_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { c: show });
}, 1, () => [widget_default]);
