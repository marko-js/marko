// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Note_content__walks = "D l";
const $Note_content__template = "<em> </em>";
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
_shells({
	a3: "a3 >>a>",
	a: /*@__PURE__*/ (() => `a !;${((_w0, _w1) => `D/${_w0}&/${_w1}&l`)($Note_content__walks, $Wrap_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($Note_content__template, $Wrap_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Note = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_note ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a2");
	}, $scope0_id) };
	const Wrap = { content: _content("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope2_id, "a", input.on ? card_default : "div", {}, 10, _content_resume("a3", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			const $childScope = _patch_child($scope3_id, "a", 0, void 0, $scope0_id);
			Note.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: $wi__input_on && _scope_with_id($scope2_id),
				a: _existing_scope($childScope)
			});
		}, $scope2_id), 0, $wg__input_on, $scope0_reason, 2);
		$wi__input_on && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_on && "a5", $wg__input_on);
		$wg__input_on || $wi__input_on && _resume_branch($scope2_id);
	}, $scope0_id) };
	_html("<main>");
	const $childScope2 = _patch_child($scope0_id, "a", 2);
	Note.content({});
	_patch_child_end();
	const $childScope3 = _patch_child($scope0_id, "b", 3);
	Wrap.content({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		g: _write_if($scope0_reason, 1) && $input_note__closures,
		h: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope2),
		b: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 1) && ($cg__input_on ? _patch_fill($scope0_id, "va6", input.note, !_server_guard($scope0_reason, 1)) : _content_withheld("a3", $scope0_id) && _patch_fill($scope0_id, "va7", input.note));
}, 1);
