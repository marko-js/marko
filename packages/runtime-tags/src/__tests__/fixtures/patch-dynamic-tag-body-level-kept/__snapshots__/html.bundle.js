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
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; D ;<button class=inc> </button>" });
_stateful_return("c");
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = c;
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", c, 1);
	$scope0_page && _scope($scope0_id, { c });
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1 a6",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $v__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", 1);
	let v = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", v, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "a2" : "a3");
		$scope1_page && _subscribe($v__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id, ($scope) => $scope0_page ? [{
		h: v,
		g: input.note
	}] : []), 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note,
		h: _write_if($scope0_reason, 0) && v,
		a: _existing_scope($childScope),
		i: _write_if($scope0_reason, 1) && $input_note__closures,
		j: $v__closures
	}) : _filled_guard($scope0_reason, 1) && _content_withheld("a1", $scope0_id) && _patch_fill($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 1));
}, 1);
