// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_foo = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.foo, ({ desc, ...item }) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attrs(item, "a", $scope1_id, "span")}>`);
		_dynamic_tag($scope1_id, "b", desc, {}, 0, 0, $wg__input_foo);
		_html(`</span>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_foo, $wg__input_foo, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_foo = _write_guard($scope0_reason, 2), $wi__input_foo = _write_if($scope0_reason, 2), $wi__input_foo__OR__input_class__OR__rest = _write_if($scope0_reason, 1), $wg__input_class__OR__rest = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = /* @__PURE__ */ new Set();
	const { class: _class, foo, ...rest } = input;
	_html(" ");
	_dynamic_tag($scope0_id, "a", _class ? "span" : "div", {
		...rest,
		class: _class
	}, _content("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason($wg__input_foo << 1);
		const $childScope = _peek_scope_id();
		child_default({ foo: input.foo });
		$wi__input_foo__OR__input_class__OR__rest && _subscribe($wi__input_foo && $input_foo__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_foo && _existing_scope($childScope)
		}), "c1", $wg__input_foo);
		$wg__input_foo || $wi__input_foo__OR__input_class__OR__rest && _resume_branch($scope1_id);
	}, $scope0_id), 0, $wg__input_class__OR__rest);
	$wi__input_foo__OR__input_class__OR__rest && _scope($scope0_id, {
		d: _write_if($scope0_reason, 0) && input.foo,
		e: _write_if($scope0_reason, 4) && _class,
		f: _write_if($scope0_reason, 3) && rest,
		h: $wi__input_foo && $input_foo__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input << 1 | $wg__input << 3 | $wg__input << 7 | $wg__input << 9);
	const $childScope = _peek_scope_id();
	wrap_default({
		"data-one": 2,
		"data-foo": 1,
		...input,
		foo: attrTags(attrTag({
			value: 1,
			desc: attrTag({ content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("One");
			}, $scope0_id) })
		}), {
			value: 1,
			desc: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("Two");
			}, $scope0_id) })
		})
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
