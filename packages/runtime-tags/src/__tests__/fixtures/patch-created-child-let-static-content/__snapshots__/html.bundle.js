// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a0: "a0,<em>static</em>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ content: _content("a0", () => {
				_scope_reason();
				_scope_id();
				_html("<em>static</em>");
			}, $scope1_id, 1) });
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
