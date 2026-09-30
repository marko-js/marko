// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_text_resume($scope0_id, "#text/1", input.label, _serialize_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_shared_n: input.shared?.n,
		count
	}, "__tests__/child.marko", 0, {
		input_shared_n: ["input.shared.n"],
		count: "6:6"
	});
});

// async-child.marko
const $Child_withLoadAssets$1 = withLoadAssets(child_default, "ready:__tests__/child.marko");
var async_child_default = _template("__tests__/async-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1), $si__input_label = _serialize_if($scope0_reason, 1), $si__input_label__OR__input_shared = _serialize_if($scope0_reason, 0), $sg__input_label__OR__input_shared = _serialize_guard($scope0_reason, 0), $si__input_shared = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_shared__closures = new Set();
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_text_resume($scope0_id, "#text/1", input.label, $sg__input_label)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/3", resolveAfter("nested", 2), (v) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason($sg__input_label << 1);
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets$1({
			label: `${input.label}-${v}`,
			shared: input.shared
		});
		$si__input_label__OR__input_shared && _subscribe($si__input_shared && $input_shared__closures, _subscribe($si__input_label && $input_label__closures, _scope($scope1_id, {
			v: $si__input_label && v,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/async-child.marko", "13:2", { v: "13:8" }), "__tests__/async-child.marko_1_input_label#0:6/subscribe", $sg__input_label__OR__input_shared), "__tests__/async-child.marko_1_input_shared#0:7/subscribe", $sg__input_label__OR__input_shared);
		$sg__input_label__OR__input_shared || $si__input_label__OR__input_shared && _resume_branch($scope1_id);
	}, $sg__input_label__OR__input_shared);
	_script($scope0_id, "__tests__/async-child.marko_0");
	_scope($scope0_id, {
		input_shared_n: input.shared?.n,
		count,
		"ClosureScopes:input_label/10": $si__input_label && $input_label__closures,
		"ClosureScopes:input_shared/11": $si__input_shared && $input_shared__closures
	}, "__tests__/async-child.marko", 0, {
		input_shared_n: ["input.shared.n"],
		count: "9:6"
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
const $AsyncChild_withLoadAssets = withLoadAssets(async_child_default, "ready:__tests__/async-child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const shared = { n: 1 };
	$Child_withLoadAssets({
		label: "main",
		shared
	});
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("reordered", 1), (v) => {
			const $scope2_id = _scope_id();
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
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content");
	_await($scope0_id, "#text/3", resolveAfter("streamed", 3), (v) => {
		const $scope3_id = _scope_id();
		$Child_withLoadAssets({
			label: v,
			shared
		});
	}, 0);
}, 1);
