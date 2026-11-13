// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, { n: 2 });
	_html("</section>");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, {});
});

// template.marko
const $Row_content__walks = " D l";
const $Row_content__template = "<em> </em>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content_resume("a0", ({ n }) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 0);
		const $scope1_reason = _scope_reason();
		const uid = _id("A");
		_html(`<em${_attr("title", input.label + " " + uid, $scope1_id, "a", $scope0_reason, 0)}>${_text_mark($scope1_id, "b", n, 1, $scope1_reason, 0)}</em>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0))}`);
		$ui__input_label && _patch_write($scope1_id, "wf", uid, 1);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			f: $ui__input_label && uid,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "a1");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ n: 1 });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	card_default({ content: Row });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.label,
		g: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
