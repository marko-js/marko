// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/child.marko
const $Body_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Body_content__template = $template$1;
const $template = $Body_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Body_content__walks);
const $setup = _shell_setup([[], []], ["a>", [[""], []]], ["a>", _shell_setup([[], []], ["a>", $setup$1])]);
_shells({
	c2: `c2${_shell_marker([[], []], ["a>", $setup$1])};${$Body_content__walks};${$Body_content__template}`,
	c: `c${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($Body_content__walks)};${$Body_content__template}`
});
var child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("c2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: _content_resume("c1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</span>`);
			$cg__input_label && _patch_render($scope2_id, "c0");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "c0", $wg__input_label);
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, $scope0_id, 0) };
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Body.content({});
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "c3", "d");
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
