// tags/my-child/index.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b1: "b1;D%;<div id=done><!> done</div>",
	b2: "b2;D%;<div id=done><!> done</div>",
	b: "b;b%;<!><!><!>"
});
var my_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, () => {
		const $scope1_id = _scope_id();
		_html(`<div id=done>${_text_mark($scope1_id, "a", input.msg, 1, $scope0_reason, 1)} done</div>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b0", $cg__input_msg);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {}), $cg__input_msg && "b0");
	}, 1, "b1", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_msg__closures });
});

// template.marko
_shells({
	a2: "a2",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template)}`,
	a: "a !a4; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1), $cg__input_promise = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		my_child_default({
			msg: input.msg,
			promise: input.promise
		});
		_patch_child_end();
		_html("</section>");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_msg);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", $cg__input_promise);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_msg && "a0", 0), $cg__input_promise && "a1", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a2", void 0, "a3", 1, 0, 2);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		h: count,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_msg__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1);
