// tags/wrap/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<div id=done>done</div>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await,<div id=done>done</div>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_msg = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/2");
	wrap_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", input.promise, () => {
				const $scope4_id = _scope_id();
				_html("<div id=done>done</div>");
			}, 1, "__tests__/template.marko_4*content");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, "__tests__/template.marko_3_input_promise#0:6/init");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
			$wi__input_promise && _resume_branch($scope3_id);
		}, () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>loading ${_text_resume($scope2_id, "#text/0", input.msg, $wg__input_msg * 2)}</em>`);
			_subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:6"));
			$wg__input_msg || _resume_branch($scope2_id);
		}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_3*content");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg/8": $wi__input_msg && $input_msg__closures,
		"ClosureScopes:input_promise/9": $wi__input_promise && $input_promise__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.msg);
}, 1);
