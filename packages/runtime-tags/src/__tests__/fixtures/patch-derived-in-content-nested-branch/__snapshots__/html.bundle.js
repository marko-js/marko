// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a7"]], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template)}`)(),
	a4: "a4 a9 a10;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrapper_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrapper_content__label__closures = /* @__PURE__ */ new Set();
		const label = input.label;
		_filled_guard($scope0_reason, 0) ? _patch_fill($scope1_id, "va0", label) : _patch_init($scope1_id, "a1");
		_if(() => {
			if (input.label) {
				const $scope2_id = _scope_id();
				_if(() => {}, $scope2_id, "a", 1, 1, 0, 0, 1);
				_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a3");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_label, void 0, void 0, void 0, ["a4"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_label && $wrapper_content__label__closures
		}), _client_guard($scope0_reason, 0) && "a5", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: count,
		h: $count__closures,
		g: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
