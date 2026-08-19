// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_value = _source_if($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html$1("<main>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html$1(`<em>${_patch_text($scope3_id, "#text/0", input.value, $scope0_owned, 2)}${_el_resume($scope3_id, "#text/0")}</em>`);
					_subscribe($si__input_value && $input_value__closures, writeScope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_value": 1
					}, "__tests__/template.marko", "4:8"));
					_resume_branch($scope3_id);
				}, void 0, "__tests__/template.marko_2_#text#0/await");
				$scope0_reason && _subscribe($si__input_value && $input_value__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html$1(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		"ClosureScopes:input_value": $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, () => [card_default]);
