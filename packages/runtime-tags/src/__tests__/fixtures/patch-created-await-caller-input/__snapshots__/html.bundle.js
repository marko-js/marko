// tags/frame.marko
const $template$1 = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<section><!></section>" });
var frame_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// under-wrapper.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $setup = _shell_setup([[], ["b1"]], ["a>", $setup$1]);
_shells({
	b5: "b5;D ;<p> </p>",
	b0: "b0 b8 b9 b10 b11 b12;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1)}`)()
});
var under_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	frame_default({ content: _content("b0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		}, 1, 0);
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }))));
		_resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb4", showSecond, 1);
	_scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $wi__input_second && $input_second__closures,
		i: $wi__input_first && $input_first__closures,
		j: $showSecond__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.second, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", input.first, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			under_wrapper_default({
				first: input.first,
				second: input.second
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.first,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.second
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va3", input.first, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.second, !_server_guard($scope0_reason, 3)));
}, 1);
