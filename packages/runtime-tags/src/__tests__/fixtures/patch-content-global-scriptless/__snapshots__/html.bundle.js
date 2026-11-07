// tags/card/index.marko
const $template = "<section><h2> </h2><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: "a2;D ;<i> </i>",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`,
	a3: `a3${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $global_brand__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		title: input.title,
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", $global$1.brand, 1, 4, 0)}</em>`);
			_subscribe($wi__input_show && $global_brand__closures, _scope($scope1_id, {}), "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			card_default({
				title: "x",
				content: _content("a2", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<i>${_text_mark($scope3_id, "a", $global$1.brand, 1, 4, 0)}</i>`);
					_subscribe($wi__input_show && $global_brand__closures, _scope($scope3_id, {
						_: $wi__input_show && _scope_with_id($scope2_id),
						Cg: $wi__input_show && 1
					}));
				}, $scope2_id, 0)
			});
			_patch_child_end();
			_scope($scope2_id, {
				_: $wi__input_show && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html("</main>");
	_fill_global_subscribe("a4", $scope0_id, _client_guard($scope0_reason, 1));
	_scope($scope0_id, {
		g: $wi__input_show && _unfilled_if($scope0_reason, 1) && $global_brand__closures,
		a: _existing_scope($childScope)
	});
}, 1);
