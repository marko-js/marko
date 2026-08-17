// tags/counter.marko
const $template$1 = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks$1 = "E%c%l l";
var counter_default = _template_persisted("__tests__/tags/counter.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}: <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</span><button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter.marko0", n, 1);
	$scope0_reason && writeScope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({ "__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 3) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			counter_default({
				label: input.title,
				start: input.start
			});
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_title: input.title,
		input_start: input.start
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_start: ["input.start"]
	});
}, 1, () => [counter_default]);
