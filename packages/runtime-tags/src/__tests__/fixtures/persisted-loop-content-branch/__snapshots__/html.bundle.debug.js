// tags/card/index.marko
const $template$1 = "<li><b> </b><!></li>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<li><b> </b><!></li>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<li><b>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</b>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</li>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<span> </span>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		const $for_content__item_alt__closures = new Set();
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		card_default({
			title: item.t,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (item.alt) {
						const $scope3_id = _scope_id();
						_html(`<em>${_patch_text($scope3_id, "#text/0", item.n, void 0, $scope0_owned, 0)}</em>`);
						_subscribe($scope0_reason && $for_content__item_n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
						return 0;
					} else {
						const $scope4_id = _scope_id();
						_html(`<span>${_patch_text($scope4_id, "#text/0", item.n, void 0, $scope0_owned, 0)}</span>`);
						_subscribe($scope0_reason && $for_content__item_n__closures, _scope($scope4_id, {
							_: _scope_with_id($scope2_id),
							"ClosureSignalIndex:item_n": 1
						}, "__tests__/template.marko", "7:8"));
						return 1;
					}
				}, $scope2_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_owned, 0);
				$scope0_reason && _subscribe($for_content__item_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
				_resume_branch($scope2_id);
			}, $scope1_id)
		});
		_scope($scope1_id, {
			item_n: item?.n,
			"ClosureScopes:item_n": $for_content__item_n__closures,
			"ClosureScopes:item_alt": $for_content__item_alt__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4", { item_n: ["item.n", "2:8"] });
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [card_default]);
