// tags/my-child/index.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D%;<div id=done><!> done</div>",
	b1: "b1;D%;<div id=done><!> done</div>",
	b: "b;b%;<!><!><!>"
});
var my_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, () => {
		const $scope1_id = _scope_id();
		_html(`<div id=done>${_patch_text($scope1_id, "a", input.msg, void 0, $scope0_reason, 2)} done</div>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "b2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "b3");
	}, 1, "b0", 1);
	_patch_write($scope0_id, "we", input.msg, 1);
	$scope0_page && _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.msg,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_msg__closures
	});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template)}`)(),
	a: "a !a6; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "a");
		my_child_default({
			msg: input.msg,
			promise: input.promise
		});
		_html("</section>");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 1) && "a3"), _client_guard($scope0_reason, 2) && "a4");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a5", void 0, "a0", 1);
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "va7", count, 1);
	$scope0_page && _scope($scope0_id, {
		h: count,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_msg__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1);
