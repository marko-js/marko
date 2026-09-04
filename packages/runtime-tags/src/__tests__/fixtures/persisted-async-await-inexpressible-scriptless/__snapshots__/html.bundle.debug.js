// tags/widget/index.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko," });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $return = input.label;
	return $return;
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)("")),
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1_#text#0/await;${_w0};${_w1}`)(((_w0) => `0${_w0}&D l`)(""), ((_w0) => `${_w0}<em> </em>`)("")),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				let w = widget_default({ label: input.value });
				_html(`<em>${_patch_text($scope2_id, "#text/2", w, void 0, $scope0_owned, 2)}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:6"));
			}, 1, "__tests__/template.marko_1_#text#0/await");
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		input_value: input.value,
		"ClosureScopes:input_value": $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, () => [widget_default]);
