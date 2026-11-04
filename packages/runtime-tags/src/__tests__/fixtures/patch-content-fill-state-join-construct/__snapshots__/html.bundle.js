// tags/frame.marko
const $template$1 = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var frame_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1)}` });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	frame_default({ content: input.content });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({
	a2: "a2 a7;D%c%c%;<span><!>/<!>/<!></span>",
	a: "a !a4;D%b ;<main><!><button>+</button></main>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1), $fg__input_p = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $p_name__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const p = input.p;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_id__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({
			title: item.title,
			content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", p.name, 1, $scope0_reason, 0)}/${_text_mark($scope2_id, "b", count, 2)}/${_text_mark($scope2_id, "c", item.id, 2, $scope0_reason, 1)}</span>`);
				_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "a0");
				$cg__input_items && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item_id__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $p_name__closures, _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }))));
			}, $scope1_id, 0)
		});
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			l: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $for_content__item_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_p && $cg__input_items && _patch_subscribers($scope0_id, "a5", "i");
	_scope($scope0_id, {
		g: count,
		i: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && p?.name,
		j: $count__closures,
		k: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && $p_name__closures
	}) || $fg__input_p && $cg__input_items && _patch_write($scope0_id, "xi", p?.name, !_server_guard($scope0_reason, 0));
}, 1);
