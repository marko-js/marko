// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell >#childScope/0>__tests__/template.marko_2_#text#0/init __tests__/template.marko_1_n#0:6/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const Show = { content: _content("__tests__/template.marko_2*content", ({ p, label }) => {
		const $scope2_id = _scope_id();
		const $Show_content__label__closures = new Set();
		const $scope2_reason = _scope_reason(), $wg__p = _write_guard($scope2_reason, 1), $wg__label = _write_guard($scope2_reason, 2), $scope2_page = _page_render(), $wi__p__OR__label = _write_if($scope2_reason, 0), $wi__label = _write_if($scope2_reason, 2);
		_await($scope2_id, "#text/0", p, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__label)}:${_text_resume($scope3_id, "#text/1", x, $wg__p * 2)}</p>`);
			$scope2_page && $wi__p__OR__label && _subscribe($wi__label && $Show_content__label__closures, _scope($scope3_id, {}, "__tests__/template.marko", "4:4"), "__tests__/template.marko_3_label#2:4/subscribe", $wg__p || $wg__label);
			$wg__p || $wg__label || $wi__p__OR__label && _resume_branch($scope3_id);
		}, 1, 0);
		$scope2_page ? $wi__label && _scope($scope2_id, { "ClosureScopes:label/9": $Show_content__label__closures }, "__tests__/template.marko", "3:2") : _filled_guard($scope2_reason, 2) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			Show.content({
				p: Promise.resolve(n),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
