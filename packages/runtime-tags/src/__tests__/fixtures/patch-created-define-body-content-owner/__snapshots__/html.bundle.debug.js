// template.marko
const $Wrap_content2__walks = "D lD%l";
const $Wrap_content2__template = "<p> </p><div><!></div>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_n#1:1/init!__tests__/template.marko_2; D%c%;<button><!>:<!></button>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell >#childScope/0>__tests__/template.marko_3_count#0:6/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $input_label__closures = new Set();
	let count = 0;
	const Wrap = { content: _content("__tests__/template.marko_3*content", ({ content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<p>${_text_resume($scope3_id, "#text/0", count)}</p><div>`);
		_dynamic_tag($scope3_id, "#text/1", content, {}, 2, 0, 0, _write_guard($scope3_reason, 0), $scope3_reason, 0);
		_html("</div>");
		_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_3_count#0:6/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__n__closures = new Set();
			let n = 0;
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 1, void 0, $scope0_id);
			Wrap.content({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "#text/1", input.label, void 0, $scope0_reason, 2)}:${_text_resume($scope2_id, "#text/2", n, 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:5/init");
				_subscribe($if_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4")));
			}, $scope1_id) });
			_patch_child_end();
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
			_scope($scope1_id, {
				n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureScopes:n/9": $if_content__n__closures,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2", { n: "7:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		count,
		"ClosureScopes:count/8": $count__closures,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
