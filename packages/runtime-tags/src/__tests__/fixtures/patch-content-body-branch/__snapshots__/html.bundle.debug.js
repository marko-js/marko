// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;Db%;<em>A:<!></em>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;Db%;<strong>B:<!></strong>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_alt__OR__input_note = _write_if($scope0_reason, 1), $wg__input_alt = _write_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_note = _write_if($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_alt__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			card_default({
				title: input.title,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.alt) {
							const $scope3_id = _scope_id();
							_html(`<em>A:${_patch_text($scope3_id, "#text/0", input.note, 2, $scope0_reason, 6)}</em>`);
							_client_guard($scope0_reason, 6) && _patch_init($scope3_id, "__tests__/template.marko_3_input_note#0:6/init");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_html(`<strong>B:${_patch_text($scope4_id, "#text/0", input.note, 2, $scope0_reason, 6)}</strong>`);
							_client_guard($scope0_reason, 6) && _patch_init($scope4_id, "__tests__/template.marko_4_input_note#0:6/init");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_alt__OR__input_note && _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_note/9": $wi__input_note && 1
							}, "__tests__/template.marko", "7:8"));
							return 1;
						}
					}, $scope2_id, "#text/0", 1, $wg__input_alt, void 0, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_reason, 5);
					_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "__tests__/template.marko_2_input_alt#0:5/init");
					$wi__input_show__OR__input_alt__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 5) && $input_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
					$wg__input_alt || $wi__input_show__OR__input_alt__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		input_title: $wi__input_show && input.title,
		input_alt: $wi__input_show && input.alt,
		input_note: _write_if($scope0_reason, 0) && input.note,
		"ClosureScopes:input_note/9": $wi__input_note && $input_note__closures,
		"ClosureScopes:input_alt/8": _write_if($scope0_reason, 5) && $input_alt__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_alt: ["input.alt"],
		input_note: ["input.note"]
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.title), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.alt), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", input.note));
}, 1);
