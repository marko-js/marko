// template.marko
const $foo_content__walks = "D l%c", $foo_content__template = "<b> </b><!><!>";
_shells({ a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($foo_content__walks, $foo_content__template) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const foo = { content: _content_elide("a0", (n) => {
		const $scope1_id = _scope_id();
		const $sg__n = _source_guard(_persisted_reason(), 0);
		_html(`<b>${_patch_text($scope1_id, "a", input.x, void 0, $scope0_owned, 0)}</b>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope);
				foo.content(n - 1);
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", 1, $sg__n, $sg__n, void 0, void 0, [0]);
		_subscribe(_source_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		}));
	}, $scope0_id) };
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	foo.content(2);
	$scope0_reason && _scope($scope0_id, {
		e: $input_x__closures,
		a: _existing_scope($childScope2)
	});
}, 1, 1);
