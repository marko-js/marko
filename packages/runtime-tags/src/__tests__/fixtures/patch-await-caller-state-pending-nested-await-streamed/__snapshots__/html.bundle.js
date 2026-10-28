// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1,<i>inner loading</i>",
	b2: "b2;D ;<em> </em>",
	b3: "b3;b%;<!><!><!>",
	b4: "b4;D%c%l%;<p><!>:<!></p><!><!>",
	b5: "b5;D%c%l%;<p><!>:<!></p><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_inner = _client_guard($scope0_reason, 3), $wi__input_inner = _write_if($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope1_id, "b", x, 2, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "c", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.inner, (y) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", y, 1, $scope0_reason, 3)}</em>`);
				_scope($scope4_id, {});
			}, 1, "b0", _unfilled_if($scope0_reason, 3) && 2, 1);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_inner ? "b6" : "b7");
			$wi__input_inner && _subscribe(_unfilled_if($scope0_reason, 3) && $input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_inner && "b7", 0);
			$wi__input_inner && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<i>inner loading</i>");
		}, void 0, "b1", void 0, "b3", 1, 0, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "b8" : "b9");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "b9");
	}, 1, "b4", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, {
		h: $wi__input_inner && _unfilled_if($scope0_reason, 3) && $input_inner__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
	_set_scope_reason(8 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	show_await_default({
		promise: p,
		label: input.label,
		inner: input.inner
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
