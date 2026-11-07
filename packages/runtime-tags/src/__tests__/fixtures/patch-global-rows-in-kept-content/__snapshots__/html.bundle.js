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
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a1: "a1;D%c%;<p><!> <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global_brand__closures = /* @__PURE__ */ new Set();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<h1>${_text_mark($scope1_id, "a", $global$1.brand, 1, 4, 0)}</h1>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", $global$1.brand, 1, 4, 0)} ${_text_mark($scope2_id, "b", i, 2, $scope0_reason, 0)}</p>`);
			_subscribe($wi__input_n && $global_brand__closures, _scope($scope2_id, {
				_: $wi__input_n && _scope_with_id($scope1_id),
				Cf: $wi__input_n && 1
			}), "a0");
		}, 0, $scope1_id, "b", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
		_subscribe($wi__input_n && $global_brand__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope1_id, { _: $wi__input_n && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a2"), "a3");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		f: $wi__input_n && _unfilled_if($scope0_reason, 0) && $global_brand__closures,
		e: $wi__input_n && _unfilled_if($scope0_reason, 0) && $input_n__closures,
		a: _existing_scope($childScope)
	});
}, 1);
