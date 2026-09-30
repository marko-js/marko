// child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_text_resume($scope0_id, "b", input.label, _serialize_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		h: input.shared?.n,
		i: count
	});
});

// async-child.marko
const $Child_withLoadAssets$1 = withLoadAssets(child_default, "_b");
var async_child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1), $si__input_label = _serialize_if($scope0_reason, 1), $si__input_label__OR__input_shared = _serialize_if($scope0_reason, 0), $sg__input_label__OR__input_shared = _serialize_guard($scope0_reason, 0), $si__input_shared = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_shared__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_text_resume($scope0_id, "b", input.label, $sg__input_label)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "d", resolveAfter("nested", 2), (v) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason($sg__input_label << 1);
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets$1({
			label: `${input.label}-${v}`,
			shared: input.shared
		});
		$si__input_label__OR__input_shared && _subscribe($si__input_shared && $input_shared__closures, _subscribe($si__input_label && $input_label__closures, _scope($scope1_id, {
			d: $si__input_label && v,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), "a0", $sg__input_label__OR__input_shared), "a1", $sg__input_label__OR__input_shared);
		$sg__input_label__OR__input_shared || $si__input_label__OR__input_shared && _resume_branch($scope1_id);
	}, $sg__input_label__OR__input_shared);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		i: input.shared?.n,
		j: count,
		k: $si__input_label && $input_label__closures,
		l: $si__input_shared && $input_shared__closures
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_b");
const $AsyncChild_withLoadAssets = withLoadAssets(async_child_default, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const shared = { n: 1 };
	$Child_withLoadAssets({
		label: "main",
		shared
	});
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("reordered", 1), (v) => {
			_scope_id();
			$Child_withLoadAssets({
				label: v,
				shared
			});
			$AsyncChild_withLoadAssets({
				label: `${v}-async`,
				shared
			});
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "c0");
	_await($scope0_id, "d", resolveAfter("streamed", 3), (v) => {
		_scope_id();
		$Child_withLoadAssets({
			label: v,
			shared
		});
	}, 0);
}, 1);
