// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b2: "b2;D%c%;<p><!>:<!></p>",
	b3: "b3;D%c%;<p><!>:<!></p>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 1)}:${_text_resume($scope1_id, "b", x, 2, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "b0" : "b1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "b1");
	}, 1, "b2", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures });
});

// template.marko
_shells({
	a5: "a5;D ;<small> </small>",
	a3: "a3",
	a6: "a6",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([["a20"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)(),
	a7: "a7;D l%;<h1> </h1><!><!>",
	a8: "a8;D l%;<h1> </h1><!><!>",
	a9: "a9;D ;<small> </small>",
	a10: "a10;b%b%;<!><!><!><!>",
	a: "a !a15; b%;<button class=swap>swap</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_title = _client_guard($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $p__closures = /* @__PURE__ */ new Set();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.title, (title) => {
			const $scope2_id = _scope_id();
			_html(`<h1>${_text_resume($scope2_id, "a", title, 1, $scope0_reason, 1)}</h1>`);
			_try($scope2_id, "b", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(2 | _mask_group($scope0_reason, 2) << 3);
				const $childScope = _peek_scope_id($scope3_id, "a", 0);
				show_await_default({
					promise: p,
					label: input.label
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_label ? "a0" : "a1");
				_subscribe($p__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					a: _existing_scope($childScope)
				}), $cg__input_label && "a1"), "a2");
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner</em>");
			}, void 0, "a3", void 0, "a4", 1, 0, 2);
			_scope($scope2_id, {});
		}, 1, "a7", _unfilled_if($scope0_reason, 1), 1);
		_await($scope1_id, "b", input.note, (note) => {
			const $scope6_id = _scope_id();
			_html(`<small>${_text_resume($scope6_id, "a", note, 1, $scope0_reason, 3)}</small>`);
			_scope($scope6_id, {});
		}, 1, "a5", _unfilled_if($scope0_reason, 3) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_title ? "a11" : "a12");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_note ? "a13" : "a14");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_title && "a12", 0), $cg__input_note && "a14", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer</em>");
	}, void 0, "a6", void 0, "a10", 1, 0, 2);
	_script($scope0_id, "a15");
	_scope($scope0_id, {
		k: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		m: $p__closures,
		j: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_title__closures,
		l: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_note__closures
	});
}, 1);
