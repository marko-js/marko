// tags/wrap.marko
const $template = "<div><!></div>";
const $setup = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1 !a0,<p>body</p>",
	a: "a !a3; D l%;<button> </button><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrap_default({ body: attrTag({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<p>body</p>");
				_script($scope2_id, "a0", 0);
			}, $scope1_id, 1) }) });
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_script($scope0_id, "a3");
	_scope($scope0_id, { g: n });
}, 1);
