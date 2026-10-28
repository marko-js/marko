// template.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_n#0:6/init;D l%;<p> </p><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_show__closures = new Set();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const doubled = value * 2;
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 1)}</p>`);
				_if(() => {
					if (n > 1) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_resume($scope3_id, "#text/0", doubled, $wg__value)}</span>`);
						_scope($scope3_id, {}, "__tests__/template.marko", "6:6");
						return 0;
					}
				}, $scope2_id, "#text/1", 1, 1, 0, 0, 1);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "__tests__/template.marko_2_input_label#0:5/init" : "__tests__/template.marko_2_input_label#0:5/subscribe");
				_client_guard($scope1_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_value#1:3/init");
				_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					doubled,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { doubled: "4:12" }), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe"), "__tests__/template.marko_2_n#0:6/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, {
			value: $wi__input_show && value,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { value: "2:15" }), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({ value: n });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		n,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/9": $n__closures,
		"ClosureScopes:input_show/7": $wi__input_show && $input_show__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
