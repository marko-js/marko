// tags/outer/tags/inner/index.marko
const $template = "<!><!><!>";
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0,<em>o</em>"
});
var inner_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_open = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>o</em>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["c0"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// tags/outer/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template)) });
var outer_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	inner_default({ open: input.o });
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [inner_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			outer_default({ o: input.o });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.o,
		f: show
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.o);
}, 1, () => [outer_default]);
