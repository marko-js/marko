// template.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Label_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content !;${_w0};${_w1}`)($Label_content__walks, $Label_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	let count = 0;
	const Label = { content: _content_elide("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<p>${_patch_text($scope1_id, "#text/0", n + input.suffix, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_patch_write($scope1_id, "PatchWrite:n", n, 1);
		_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_suffix#0:4_n#3/init");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_suffix#0:4/init");
		$scope1_page ? _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			n: $wi__input_suffix && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { n: "2:17" }), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "__tests__/template.marko_1_input_suffix#0:4/subscribe") : _filled_guard($scope1_reason, 0) && _client_guard($scope0_reason, 0) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", n);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Label.content({ n: count });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix/6": $wi__input_suffix && $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.suffix);
}, 1);
