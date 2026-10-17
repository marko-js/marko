// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content !__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Inner_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<button>inc</button>`)($Inner_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Outer = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		let count = 0;
		const Inner = { content: _content_elide("__tests__/template.marko_2*content", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const b = value + y;
			_html(`<p>${_patch_text($scope2_id, "#text/0", b + $global$1.suffix, void 0, (2 | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("__tests__/template.marko_2_$global_suffix#0:16_b#5", $scope2_id, _client_guard($scope2_reason, 0));
			_patch_write($scope2_id, "PatchWrite:y", y, 1);
			_patch_write($scope2_id, "PatchWrite:b", b, 1);
			_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_value#1:4_y#3/init");
			_subscribe(_unfilled_if($scope2_reason, 0) && $wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				y: _unfilled_if($scope1_reason, 0) && y,
				b: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope2_reason, 0)) && b,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", {
				y: "3:19",
				b: "4:12"
			}));
		}, $scope1_id) };
		_set_scope_reason(2);
		const $childScope = _patch_child($scope1_id, "#childScope/0");
		Inner.content({ y: count });
		_html(`<button>inc</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			value,
			count,
			"ClosureScopes:value/6": $wi__value && $Outer_content__value__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", {
			value: "1:17",
			count: "2:8"
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.show && Outer, { value: input.n }, 0, 0, $wg__input_show__OR__input_n, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_show", input.show, 1);
	_patch_write($scope0_id, "PatchWrite:input_n", input.n, 1);
	_patch_write($scope0_id, "PatchWrite:Outer", Outer, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_show#3_input_n#4_Outer#5/init");
	$scope0_page ? _scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.n,
		Outer: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Outer
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_n: ["input.n"],
		Outer: "1:9"
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
