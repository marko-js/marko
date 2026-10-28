// tags/wrap.marko
const $template = "<button>toggle</button><div><!></div><!><!>";
const $walks = " bD%l%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		f: input.content,
		g: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3",
	a4: "a4;D ;<p> </p>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_x__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrap_default({ content: _content_resume("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", check(input.fail, input.x), void 0, $scope0_reason, 0)}</p>`);
			(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a0");
			(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a1");
			_patch_join_init($scope2_id, "a2", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">>d", _filled_guard($scope0_reason, 2) && ">>e");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "a0"), _client_guard($scope0_reason, 2) && "a1");
		}, void 0, (err) => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "a", err.message, void 0, 4, 0)}</b>`);
			_scope($scope3_id, {});
		}, void 0, "a3", "a4", void 0, 1, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_patch_child_end();
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.fail);
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.x);
	_scope($scope0_id, {
		d: input.fail,
		e: input.x,
		f: _write_if($scope0_reason, 1) && $input_fail__closures,
		g: _write_if($scope0_reason, 2) && $input_x__closures,
		a: _existing_scope($childScope)
	});
}, 1);
