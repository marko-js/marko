// tags/press-button.marko
var press_button_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<button>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html(`</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, { e: input.onPress });
});

// tags/press-buttons.marko
var press_buttons_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button = _write_guard($scope0_reason, 0), $wi__input_button = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.button, (button) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_button << 1);
		const $childScope = _peek_scope_id();
		press_button_default(button);
		$wi__input_button && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", $wg__input_button, $wg__input_button, 0, 0, 1);
	$wi__input_button && _scope($scope0_id, {});
});

// grand-child.marko
var grand_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	press_button_default({
		onPress: _resume(function() {
			count++;
		}, "b0", $scope0_id),
		content: _content("b3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`count:${_text_mark($scope1_id, "a", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2");
		}, $scope0_id)
	});
	_set_scope_reason(2);
	let $button;
	forOf([10], (step) => {
		$button = attrTags($button, {
			onPress: _resume_locals(function() {
				count += step;
			}, "b1", { h: step }, $scope0_id),
			content: _content("b4", () => {
				const $scope2_reason = _scope_reason(), $wg__step = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`add ${_text_mark($scope2_id, "a", step, $wg__step * 2)}`);
				_write_if($scope2_reason, 0) && _scope($scope2_id, {});
			}, $scope0_id)
		});
	});
	const $childScope = _peek_scope_id();
	press_buttons_default({ button: $button });
	_scope($scope0_id, {
		c: count,
		d: $count__closures,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	$GrandChild_withLoadAssets({});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
