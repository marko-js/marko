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
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}&`)($Row_content__walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}`)($Row_content__template, $template)}`,
	a1: "a1;D%c%;<em><!> <!></em>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Row = { content: _content_resume("a2", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", $global$1.label, 1, 4, 0)} ${_text_mark($scope2_id, "b", n, 2, $scope1_reason, 0)}</em>`);
				_fill_global_subscribe("a0", $scope2_id);
				_scope($scope2_id, { _: $wi__n && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__n, 1, 0, 0, ["a1"], $scope1_reason, 0);
		$wi__n && _scope($scope1_id, {});
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
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
