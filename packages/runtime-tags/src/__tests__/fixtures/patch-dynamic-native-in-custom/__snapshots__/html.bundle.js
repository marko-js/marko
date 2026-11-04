// card.marko
const $template = "<section><em> </em><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_mark($scope0_id, "a", input.meta ? input.meta.n : "-", 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["c6"]], ["a>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}` });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({
		meta: attrTag({ n: count }),
		content: _content("c5", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": count }, 0, _content("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_mark($scope2_id, "a", input.label, $wg__input_label * 2));
				$cg__input_label && _patch_render($scope2_id, "c1");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "c1", $wg__input_label);
			}, $scope1_id));
			_patch_render($scope1_id, "c2", _filled_guard($scope0_reason, 0) && ">e");
			_subscribe($count__closures, _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "c3"), "c4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c6");
	$fg__input_label && _patch_subscribers($scope0_id, "c7", "f");
	_scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $wi__input_label && $input_label__closures,
		h: $wi__input_on && $input_on__closures,
		j: $count__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
