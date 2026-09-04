// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;Db%;<em>A:<!></em>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;Db%;<strong>B:<!></strong>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_note = _source_if($scope0_reason, 7), $sg__input_alt = _source_guard($scope0_reason, 6), $sg__input_show = _source_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_alt__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 5) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({
				title: input.title,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _persisted_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.alt) {
							const $scope3_id = _scope_id();
							_html(`<em>A:${_patch_text($scope3_id, "#text/0", input.note, 2, $scope0_owned, 7)}</em>`);
							_subscribe($si__input_note && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_html(`<strong>B:${_patch_text($scope4_id, "#text/0", input.note, 2, $scope0_owned, 7)}</strong>`);
							_subscribe($si__input_note && $input_note__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_note": 1
							}, "__tests__/template.marko", "7:8"));
							return 1;
						}
					}, $scope2_id, "#text/0", 1, $sg__input_alt, $sg__input_alt, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_owned, 6);
					$scope0_reason && _subscribe(_source_if($scope0_reason, 6) && $input_alt__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
					$sg__input_alt || $scope0_reason && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		input_title: input.title,
		input_alt: input.alt,
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"ClosureScopes:input_alt": $input_alt__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_alt: ["input.alt"],
		input_note: ["input.note"]
	});
}, 1, () => [card_default]);
