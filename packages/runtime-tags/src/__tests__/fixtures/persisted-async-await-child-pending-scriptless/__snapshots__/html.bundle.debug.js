// tags/pill.marko
const $template$1 = "<b class=pill><!>:<!></b><button class=inc>+</button>";
const $walks$1 = "D%c%l b";
_shells({ "__tests__/tags/pill.marko": "__tests__/tags/pill.marko !__tests__/tags/pill.marko_0;D%c%l ;<b class=pill><!>:<!></b><button class=inc>+</button>" });
var pill_default = _template_persisted("__tests__/tags/pill.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<b class=pill>${_patch_text($scope0_id, "#text/0", input.text, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "#text/1", n, 2)}</b><button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/pill.marko_0");
	_patch_value($scope0_id, "__tests__/tags/pill.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/tags/pill.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_3*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1_#text#0/await;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<em>closed</em>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope3_id, "#childScope/0", $childScope);
				pill_default({
					text: value,
					start: 2
				});
				_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:6");
			}, void 0, "__tests__/template.marko_1_#text#0/await");
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && _scope($scope2_id, {}, "__tests__/template.marko", "7:4");
			return 1;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"]);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1, () => [pill_default]);
