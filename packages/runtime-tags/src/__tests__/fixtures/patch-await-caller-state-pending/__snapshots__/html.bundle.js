// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D%c%;<p><!>:<!></p>",
	b2: "b2;D%c%;<p><!>:<!></p>",
	b3: "b3;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope2_id, "b", x, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b0");
		}, 1, "b1", $ui__input_promise, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b4", 1);
		$wi__input_promise__OR__input_label && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b4", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<p>waiting</p>");
	}, void 0, "b5", void 0, "b3", 1);
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_mark($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_mark($scope0_id, "b")}`);
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
