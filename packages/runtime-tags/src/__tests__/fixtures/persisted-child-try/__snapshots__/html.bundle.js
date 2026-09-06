// tags/widget/index.marko
_shells({
	b0: "b0,<em>bad</em>",
	b1: "b1,<em>ok</em>",
	b: "b;b%;<!><!><!>"
});
var widget_default = _template_persisted("b", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("b1", () => {
		_scope_id();
		_persisted_reason();
		_html("<em>ok</em>");
	}, $scope0_id), { catch: attrTag({ content: _content_record("b0", $scope0_id) }) });
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
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
	$scope0_reason && _scope($scope0_id, { c: show });
}, 1, () => [widget_default]);
