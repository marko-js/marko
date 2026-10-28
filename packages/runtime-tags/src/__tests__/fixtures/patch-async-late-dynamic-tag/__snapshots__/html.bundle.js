// tags/frame.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<section></section>",
	b1: "b1;b%;<!><!><!>"
});
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 1, 0, 0, ["b1"], 0, 0);
	_html("</section>");
});

// template.marko
const $setup = _shell_setup([[], ["a8"]], ["b>", $setup$1]);
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D ;<em> </em>",
	a5: "a5 a14",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D%b/${_w0}& l`)(" b")};${((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $wi__input_q = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_q__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.as, { class: "box" }, 1, _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", v, 1, $scope0_reason, 2)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a1");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a6");
		$wi__input_as__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.p }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_text_resume($scope4_id, "a", w, 1, $scope0_reason, 3)}</b>`);
			_scope($scope4_id, {});
		}, 1, "a0");
		_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a7");
		$wi__input_q && _subscribe(_unfilled_if($scope0_reason, 3) && $input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		$wi__input_q && _resume_branch($scope2_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_html(`<button>interactive</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.p,
		i: _write_if($scope0_reason, 2) && $input_p__closures,
		j: $wi__input_q && $input_q__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("a5", $scope0_id) && _patch_fill($scope0_id, "va9", input.p, !_server_guard($scope0_reason, 2));
}, 1);
