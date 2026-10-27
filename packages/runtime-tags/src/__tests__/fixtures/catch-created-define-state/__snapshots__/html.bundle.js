// lazy-child.marko
var lazy_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { g: count });
});

// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// template.marko
function boom(error) {
	throw error;
}
const $LazyChild_withLoadAssets = withLoadAssets(() => lazy_child_default, "b", flush, "_b");
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_error = _write_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const LazyBody = { content: _content("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason($wg__input_label << 1);
		const $childScope = _peek_scope_id();
		$LazyChild_withLoadAssets({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: $wi__input_label && _existing_scope($childScope)
		}), "c1", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	const ChildBody = { content: _content("c2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_scope_reason($wg__input_label << 1);
		const $childScope2 = _peek_scope_id();
		child_default({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope2),
			Cf: $wi__input_label && 1
		}), "c3", $wg__input_label);
		$wg__input_label || _resume_branch($scope2_id);
	}, $scope0_id) };
	const OwnBody = { content: _content("c4", () => {
		const $scope6_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<button>own:${_text_resume($scope6_id, "b", count, 2)}</button>${_el_resume($scope6_id, "a")}`);
		_script($scope6_id, "c5");
		_scope($scope6_id, { c: count });
	}, $scope0_id) };
	const Inner = { content: _content("c6", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_set_scope_reason($wg__input_label << 1);
		const $childScope3 = _peek_scope_id();
		$LazyChild_withLoadAssets({ label: input.label });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			b: $wi__input_label && _existing_scope($childScope3),
			Cf: $wi__input_label && 2
		}), "c7", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, $scope0_id) };
	const Outer = { content: _content("c8", () => {
		const $scope7_id = _scope_id();
		_scope_reason();
		Inner.content({});
		_scope($scope7_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "a", input.error ? boom(input.error) : "ok", $wg__input_error)}</p>`);
		$wi__input_error && _subscribe($input_error__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }), "c9", $wg__input_error);
		$wg__input_error || $wi__input_error && _resume_branch($scope4_id);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`<b>${_text_resume($scope5_id, "a", err.message, $wg__err_message)}</b>`);
		LazyBody.content({});
		ChildBody.content({});
		OwnBody.content({});
		Outer.content({});
		_scope($scope5_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "c10");
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && $input_error__closures
	});
}, 1);
