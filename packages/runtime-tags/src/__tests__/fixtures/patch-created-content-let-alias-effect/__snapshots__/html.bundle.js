// tags/wrap.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1 a5; ;<div></div>",
	a: "a !a3; b%;<button>+</button><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $text__closures = /* @__PURE__ */ new Set();
	let text = input.text;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrap_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<div></div>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_subscribe($text__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: text,
		h: $text__closures
	});
}, 1);
