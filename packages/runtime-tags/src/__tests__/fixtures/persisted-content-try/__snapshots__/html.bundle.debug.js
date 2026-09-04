// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D%;<section><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content,loading",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _persisted_reason();
					_await($scope3_id, "#text/0", Promise.resolve(input.value), () => {
						const $scope4_id = _scope_id();
						_html(`<em>${_patch_text($scope4_id, "#text/0", input.value, void 0, $scope0_owned, 2)}</em>`);
						_scope($scope4_id, {
							_: _scope_with_id($scope3_id),
							"ClosureSignalIndex:input_value": 1
						}, "__tests__/template.marko", "5:10");
					}, 1, "__tests__/template.marko_3_#text#0/await");
					$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
					$scope0_reason && _resume_branch($scope3_id);
				}, $scope2_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_5*content", $scope2_id) }) });
				$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6");
			}, $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		input_value: input.value,
		"ClosureScopes:input_value": $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, () => [card_default]);
