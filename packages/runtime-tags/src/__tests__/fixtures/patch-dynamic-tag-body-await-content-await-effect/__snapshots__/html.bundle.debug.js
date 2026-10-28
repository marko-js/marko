// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !;D l%;<b> </b><!><!>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await !;D l%;<b> </b><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_w = _server_guard($scope0_reason, 5), $scope0_page = _page_render(), $cg__input_w = _client_guard($scope0_reason, 5), $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note = _write_if($scope0_reason, 2), $wg__input_outer = _write_guard($scope0_reason, 4), $cg__input_outer = _client_guard($scope0_reason, 4), $wi__input_w = _write_if($scope0_reason, 5), $wi__input_outer = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_inner__closures = new Set();
	const $input_w__closures = new Set();
	const $input_outer__closures = new Set();
	_html("<main>");
	_await($scope0_id, "#text/0", input.v, (v) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.outer ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			_await($scope2_id, "#text/0", input.w, (w) => {
				const $scope3_id = _scope_id();
				const $await_content2__w__closures = new Set();
				_html(`<b>${_text_resume($scope3_id, "#text/0", w, 1, $scope0_reason, 5)}</b>`);
				_dynamic_tag($scope3_id, "#text/1", input.inner ? card_default : "section", {}, 2, _content_resume("__tests__/template.marko_4*content", () => {
					const $scope4_id = _scope_id();
					const $scope4_reason = _scope_reason();
					_html(`<em>${_text_resume($scope4_id, "#text/0", input.note, 1, $scope0_reason, 7)} ${_text_resume($scope4_id, "#text/1", w, 2, $scope0_reason, 5)}</em>`);
					_unfilled_if($scope0_reason, 7) && _patch_init($scope4_id, _client_guard($scope0_reason, 7) ? "__tests__/template.marko_4_input_note#0:7/init" : "__tests__/template.marko_4_input_note#0:7/subscribe");
					_unfilled_if($scope0_reason, 5) && _patch_init($scope4_id, $cg__input_w ? "__tests__/template.marko_4_w#3:3/init" : "__tests__/template.marko_4_w#3:3/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 5) && $await_content2__w__closures, _subscribe(_unfilled_if($scope0_reason, 7) && $input_note__closures, _scope($scope4_id, { _: $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _scope_with_id($scope3_id) }, "__tests__/template.marko", "8:12")));
				}, $scope3_id, ($scope) => $scope2_page ? [
					{ input_note: input.note },
					{ _: $scope($scope0_id) },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				] : []), 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
				_script($scope3_id, "__tests__/template.marko_3_w#3", 1, _filled_guard($scope0_reason, 5), "w");
				_filled_guard($scope0_reason, 5) && (_content_withheld("__tests__/template.marko_4*content", $scope3_id) ? _patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill3", w) : _patch_write($scope3_id, "PatchMarkedWrite:w", w, !$sg__input_w));
				_filled_guard($scope0_reason, 7) && (_content_withheld("__tests__/template.marko_2*content", $scope3_id) || _content_withheld("__tests__/template.marko_4*content", $scope3_id)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, _client_guard($scope0_reason, 6) ? "__tests__/template.marko_3_input_inner#0:6/init" : "__tests__/template.marko_3_input_inner#0:6/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 6) && $input_inner__closures, _scope($scope3_id, {
					w,
					"ClosureScopes:w/12": $wi__input_w && $await_content2__w__closures
				}, "__tests__/template.marko", "5:8", { w: "5:14" }));
			}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 5), 0, 1);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_w ? "__tests__/template.marko_2_input_w#0:5/init" : "__tests__/template.marko_2_input_w#0:5/subscribe");
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 5) && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:8"));
			$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope2_id);
		}, $scope1_id, ($scope2) => $scope0_page ? [{
			input_note: input.note,
			input_inner: input.inner,
			input_w: input.w
		}, { _: $scope2($scope0_id) }] : []), 0, $wg__input_outer, $scope0_reason, 4);
		_filled_guard($scope0_reason, 5) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w);
		_filled_guard($scope0_reason, 6) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.inner);
		_filled_guard($scope0_reason, 7) && (_content_withheld("__tests__/template.marko_2*content", $scope1_id) || _content_withheld("__tests__/template.marko_4*content", $scope1_id)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, $cg__input_outer ? "__tests__/template.marko_1_input_outer#0:4/init" : "__tests__/template.marko_1_input_outer#0:4/subscribe");
		$wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 4) && $input_outer__closures, _scope($scope1_id, {}, "__tests__/template.marko", "3:4"), $cg__input_outer && "__tests__/template.marko_1_input_outer#0:4/subscribe", $wg__input_outer);
		$wg__input_outer || $wi__input_outer__OR__input_w__OR__input_inner__OR__input_note && _resume_branch($scope1_id);
	}, 1, "__tests__/template.marko_1*content", _unfilled_if($scope0_reason, 3), 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		input_w: $wi__input_outer && input.w,
		input_inner: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.inner,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 7)) && input.note,
		"ClosureScopes:input_note/11": _write_if($scope0_reason, 7) && $input_note__closures,
		"ClosureScopes:input_inner/10": _write_if($scope0_reason, 6) && $input_inner__closures,
		"ClosureScopes:input_w/9": $wi__input_w && $input_w__closures,
		"ClosureScopes:input_outer/8": $wi__input_outer && _unfilled_if($scope0_reason, 4) && $input_outer__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		input_inner: ["input.inner"],
		input_note: ["input.note"]
	}) || (_filled_guard($scope0_reason, 5) && $cg__input_outer && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !$sg__input_w), _filled_guard($scope0_reason, 6) && $cg__input_outer && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.inner, !_server_guard($scope0_reason, 6)), (_content_withheld("__tests__/template.marko_2*content", $scope0_id) || $cg__input_outer) && _content_withhold(input.inner), _filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note, !_server_guard($scope0_reason, 7)));
}, 1);
