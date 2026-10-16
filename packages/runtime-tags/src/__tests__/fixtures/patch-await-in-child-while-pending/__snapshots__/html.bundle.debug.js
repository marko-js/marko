// tags/my-child/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/my-child/index.marko_1*content": "__tests__/tags/my-child/index.marko_1*content;D%;<div id=done><!> done</div>",
	"__tests__/tags/my-child/index.marko_0_#text#0/await": "__tests__/tags/my-child/index.marko_0_#text#0/await;D%;<div id=done><!> done</div>",
	"__tests__/tags/my-child/index.marko": "__tests__/tags/my-child/index.marko;b%;<!><!><!>"
});
var my_child_default = _template("__tests__/tags/my-child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, () => {
		const $scope1_id = _scope_id();
		_html(`<div id=done>${_patch_text($scope1_id, "#text/0", input.msg, void 0, $scope0_reason, 2)} done</div>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/my-child/index.marko_1_input_msg#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/my-child/index.marko", "1:2"), _client_guard($scope0_reason, 2) && "__tests__/tags/my-child/index.marko_1_input_msg#0:4/subscribe");
	}, 1, "__tests__/tags/my-child/index.marko_1*content", 1);
	_patch_write($scope0_id, "PatchWrite:input_msg", input.msg, 1);
	$scope0_page && _scope($scope0_id, {
		input_msg: _unfilled_if($scope0_reason, 1) && input.msg,
		"ClosureScopes:input_msg/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_msg__closures
	}, "__tests__/tags/my-child/index.marko", 0, { input_msg: ["input.msg"] });
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content;${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "#childScope/0");
		my_child_default({
			msg: input.msg,
			promise: input.promise
		});
		_html("</section>");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_msg#0:5/init");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:6/init");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_msg#0:5/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_promise#0:6/subscribe");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_msg/8": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_msg__closures,
		"ClosureScopes:input_promise/9": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
