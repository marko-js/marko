// tags/card/index.marko
const $template$1 = "<li><b> </b><!></li>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<li><b> </b><!></li>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li><b>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</b>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</li>");
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		const $for_content__item_alt__closures = new Set();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({
			title: item.t,
			content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (item.alt) {
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "#text/0", item.n, void 0, $scope0_reason, 0)}</em>`);
						$cg__input_items && _patch_init($scope3_id, "__tests__/template.marko_3_item_n#1:5/init");
						_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_n__closures, _scope($scope3_id, { _: $wi__input_items && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
						return 0;
					} else {
						const $scope4_id = _scope_id();
						_html(`<span>${_text_resume($scope4_id, "#text/0", item.n, void 0, $scope0_reason, 0)}</span>`);
						$cg__input_items && _patch_init($scope4_id, "__tests__/template.marko_4_item_n#1:5/init");
						_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_n__closures, _scope($scope4_id, {
							_: $wi__input_items && _scope_with_id($scope2_id),
							"ClosureSignalIndex:item_n/7": $wi__input_items && 1
						}, "__tests__/template.marko", "7:8"));
						return 1;
					}
				}, $scope2_id, "#text/0", 1, $wg__input_items, void 0, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_reason, 0);
				$cg__input_items && _patch_init($scope2_id, "__tests__/template.marko_2_item_alt#1:4/init");
				$wi__input_items && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
				$wg__input_items || $wi__input_items && _resume_branch($scope2_id);
			}, $scope1_id, 1)
		});
		_patch_child_end();
		_scope($scope1_id, {
			"ClosureScopes:item_n/7": $wi__input_items && _unfilled_if($scope0_reason, 0) && $for_content__item_n__closures,
			"ClosureScopes:item_alt/6": $wi__input_items && _unfilled_if($scope0_reason, 0) && $for_content__item_alt__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
