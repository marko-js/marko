// tags/frame.marko
const $template$1 = "<section><!></section>";
const $setup$2 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/inner.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $setup$1 = _shell_setup([[], ["c1"]], ["a>", $setup$2]);
_shells({
	c5: "c5;D ;<p> </p>",
	c0: "c0 c8 c9 c10 c11 c12;b%;<!><!><!>",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1)}`)()
});
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	frame_default({ content: _content_elide("c0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		}, 1, 0);
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }))));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "c1");
	_patch_fill($scope0_id, "vc4", showSecond, 1);
	_scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $wi__input_second && $input_second__closures,
		i: $wi__input_first && $input_first__closures,
		j: $showSecond__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc2", input.second, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc3", input.first, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	inner_default({
		first: input.first,
		second: input.second
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
