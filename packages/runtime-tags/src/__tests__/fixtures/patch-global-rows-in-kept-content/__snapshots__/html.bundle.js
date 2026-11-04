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
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 0), $wi__input_n = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<h1>${_text_mark($scope1_id, "a", $global$1.brand, $scope1_page)}</h1>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", $global$1.brand, $scope1_page)} ${_escape(i)}</p>`);
			_fill_global_subscribe("a0", $scope2_id, 1);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "b", $wg__input_n, $wg__input_n, 0, 0, 1);
		_fill_global_subscribe("a1", $scope1_id, 1);
		$cg__input_n && _patch_render($scope1_id, "a2");
		_subscribe($wi__input_n && $input_n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_n && "a2", $wg__input_n || $scope1_page);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.n,
		e: $wi__input_n && $input_n__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.n, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a4", "d");
}, 1);
