// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_in(input, (name, tag) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (name !== "content") {
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content({
					"data-name": name,
					...tag
				}, "a", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "b0");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $sg__input, 0, 0, 0, 1);
		_scope($scope1_id, { M: name });
	}, 0, $scope0_id, "a", $sg__input, $sg__input, $sg__input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	child_default({
		a: attrTag({
			onClick: _resume(function() {
				count++;
			}, "a0", $scope0_id),
			content: _content("a1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`A ${_text_resume($scope1_id, "a", count, 2)}`);
				_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			}, $scope0_id)
		}),
		b: attrTag({ content: _content("a2", () => {
			_scope_reason();
			_scope_id();
			_html("B");
		}, $scope0_id) })
	});
	_scope($scope0_id, {
		b: count,
		c: $count__closures,
		a: _existing_scope($childScope)
	});
}, 1);
