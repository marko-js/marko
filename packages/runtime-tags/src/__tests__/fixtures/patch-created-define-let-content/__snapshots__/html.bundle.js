// template.marko
const $Card_content2__walks = "D b%l";
const $Card_content2__template = "<section><button>clear</button><!></section>";
_shells({
	a4: "a4;Db%;<em>static <!></em>",
	"~a4": "~a4;Db%;<em>static <!></em>",
	a: "a !;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5 !>a>a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content2__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content("a0", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		let c = input.content;
		_html(`<section><button>clear</button>${_el_resume($scope3_id, "a")}`);
		_dynamic_tag($scope3_id, "b", c, {});
		_html("</section>");
		_script($scope3_id, "a1");
		_filled_guard($scope3_reason, 0) && _patch_fill($scope3_id, "va2", c, 1);
		_scope($scope3_id, {}) || _content_withhold(input.content);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1, 0, $scope0_id);
			Card.content({ content: _content("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a3");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 2));
}, 1);
