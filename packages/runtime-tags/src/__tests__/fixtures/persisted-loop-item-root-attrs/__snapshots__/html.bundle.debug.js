// tags/icon.marko
const $template$1 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/icon.marko": "__tests__/tags/icon.marko;D ;<svg viewBox=\"0 0 1 1\"><title></title></svg>" });
var icon_default = _template_persisted("__tests__/tags/icon.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_patch_text_content($scope0_id, "#title/0", input.name, _escape, $scope0_owned, 0)}</title>${_el_resume($scope0_id, "#title/0")}</svg>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/icon.marko", 0);
}, 0, 0);

// template.marko
const $template = "<nav></nav><main></main>";
const $walks = " b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b ;<nav></nav><main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l"), /*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items__OR__input_path = _source_guard($scope0_reason, 0), $sg__input_page = _source_guard($scope0_reason, 4), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const active = item.href === input.path;
		_html(`<a${_patch_attr_class($scope1_id, "#a/0", ["link", { active }], $scope0_owned, 0)}${_patch_attr($scope1_id, "#a/0", "href", item.href, $scope0_owned, 2)}>`);
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/1", $childScope);
		icon_default({ name: item.icon });
		_html(`<span>${_patch_text($scope1_id, "#text/2", item.label, void 0, $scope0_owned, 2)}</span></a>${_el_resume($scope1_id, "#a/0")}`);
		_scope($scope1_id, {
			item_href: _source_if($scope0_reason, 3) && item?.href,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4", { item_href: ["item.href", "2:8"] });
	}, 0, $scope0_id, "#nav/0", 1, $sg__input_items__OR__input_path, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 2);
	_html(`</nav>${_el_resume($scope0_id, "#nav/0", $sg__input_items__OR__input_path)}<main>`);
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "#text/0", input.page, void 0, $scope0_owned, 4)}</p>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:8");
			return 0;
		}
	}, $scope0_id, "#main/1", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/1", $sg__input_page)}`);
	$scope0_reason && _scope($scope0_id, {
		input_path: _source_if($scope0_reason, 2) && input.path,
		input_page: _source_if($scope0_reason, 4) && input.page
	}, "__tests__/template.marko", 0, {
		input_path: ["input.path"],
		input_page: ["input.page"]
	});
}, 1, () => [icon_default]);
