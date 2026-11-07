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
const $setup = _shell_setup([[], ["b7"]], ["a>", $setup$1]);
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b2: "b2 b6;b%;<!><!><!>",
	b: `b${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1)}`
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
	frame_default({ content: _content("b2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		}, 1, "b0", 2);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b3", 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b4", 1);
		_patch_render($scope1_id, "b5", [_filled_guard($scope0_reason, 0) && ">e", _filled_guard($scope0_reason, 1) && ">f"]);
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b3", 0), _client_guard($scope0_reason, 1) && "b4", 0), "b6", 0);
		_resume_branch($scope1_id);
	}, $scope0_id, 0) });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "b7");
	_patch_fill($scope0_id, "vb8", showSecond, 1);
	_scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $wi__input_second && $input_second__closures,
		i: $wi__input_first && $input_first__closures,
		j: $showSecond__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.second, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.first, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_first = _filled_guard($scope0_reason, 2), $fg__input_second = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			under_wrapper_default({
				first: input.first,
				second: input.second
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_first && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_second && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.first,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.second
	}) || ($fg__input_first && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.first, !_server_guard($scope0_reason, 2)), $fg__input_second && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.second, !_server_guard($scope0_reason, 3)));
}, 1);
