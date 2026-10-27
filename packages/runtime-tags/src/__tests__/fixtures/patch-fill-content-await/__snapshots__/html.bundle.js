// tags/frame.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		}, 1, 0);
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0", 0), _client_guard($scope0_reason, 1) && "a1", 0), "a2", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $wi__input_second && $input_second__closures,
		i: $wi__input_first && $input_first__closures,
		j: $showSecond__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.second, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.first, !_server_guard($scope0_reason, 1)));
}, 1);
