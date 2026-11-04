// tags/list.marko
var list_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = input.item;
	_html(`<button>copy</button>${_el_mark($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {});
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: items });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (item) => {
				$item = attrTags($item, { content: _content_resume("a1", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", item.text, _write_guard($scope2_reason, 0))} ${_text_mark($scope2_id, "b", n, 2)}</em>`);
					_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
				}, $scope1_id, () => [{ 2: item?.text }]) });
			});
			const $childScope = _peek_scope_id();
			list_default({ item: $item });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.items,
		g: n,
		i: $n__closures
	});
}, 1);
