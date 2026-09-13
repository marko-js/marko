// tags/icon.marko
const $template = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
_shells({ b: "b;D ;<svg viewBox=\"0 0 1 1\"><title></title></svg>" });
var icon_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_patch_text_content($scope0_id, "a", input.name, _escape, $scope0_owned, 0)}</title>${_el_resume($scope0_id, "a")}</svg>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a: "a; b ;<nav></nav><main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l"), /*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template)),
	a1: "a1;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items__OR__input_path = _source_guard($scope0_reason, 0), $sg__input_page = _source_guard($scope0_reason, 4), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<a${_patch_attr_class($scope1_id, "a", ["link", { active: item.href === input.path }], $scope0_owned, 0)}${_patch_attr($scope1_id, "a", "href", item.href, $scope0_owned, 2)}>`);
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "b", $childScope);
		icon_default({ name: item.icon });
		_html(`<span>${_patch_text($scope1_id, "c", item.label, void 0, $scope0_owned, 2)}</span></a>${_el_resume($scope1_id, "a")}`);
		_scope($scope1_id, {
			f: _source_if($scope0_reason, 3) && item?.href,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_items__OR__input_path, $sg__input_items, void 0, void 0, "a0", $scope0_owned, 2);
	_html(`</nav>${_el_resume($scope0_id, "a", $sg__input_items__OR__input_path)}<main>`);
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", input.page, void 0, $scope0_owned, 4)}</p>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["a1"], $scope0_owned, 4);
	_html(`</main>${_el_resume($scope0_id, "b", $sg__input_page)}`);
	$scope0_reason && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.path,
		g: _source_if($scope0_reason, 4) && input.page
	});
}, 1, () => [icon_default]);
