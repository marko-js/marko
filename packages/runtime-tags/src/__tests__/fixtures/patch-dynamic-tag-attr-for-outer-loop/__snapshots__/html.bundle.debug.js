// tags/list.marko
const $template$2 = "<ul></ul>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko; ;<ul></ul>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;D%;<li><!></li>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 0, 0, $wg__input_item, void 0, 2, $scope0_reason, 0);
		_html("</li>");
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:6");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/list2.marko
const $template$1 = "<ol></ol>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list2.marko": "__tests__/tags/list2.marko; ;<ol></ol>",
	"__tests__/tags/list2.marko_1*shell": "__tests__/tags/list2.marko_1*shell;D%;<li><!></li>"
});
var list2_default = _template("__tests__/tags/list2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ol>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 0, 0, $wg__input_item, void 0, 2, $scope0_reason, 0);
		_html("</li>");
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list2.marko", "1:6");
	}, 0, $scope0_id, "#ol/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list2.marko_1*shell", $scope0_reason, 0);
	_html(`</ol>${_el_resume($scope0_id, "#ol/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/list2.marko", 0);
});

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button class=inc> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $scope0_page = _page_render(), $cg__input_as = _client_guard($scope0_reason, 5), $cg__input_bs = _client_guard($scope0_reason, 7), $cg__input_on = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = new Set();
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`${_patch_text($scope2_id, "#text/0", a, void 0, $scope0_reason, 5)}:${_patch_text($scope2_id, "#text/1", b, 2)}:${_patch_text($scope2_id, "#text/2", input.note, 2, $scope0_reason, 8)}`);
				_unfilled_if($scope0_reason, 8) && _patch_init($scope2_id, _client_guard($scope0_reason, 8) ? "__tests__/template.marko_2_input_note#0:8/init" : "__tests__/template.marko_2_input_note#0:8/subscribe");
				_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_as ? "__tests__/template.marko_2_a#1:3/init" : "__tests__/template.marko_2_a#1:3/subscribe");
				$scope2_page && _subscribe(_unfilled_if($scope0_reason, 5) && $for_content__a__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:8")));
			}, $scope1_id, () => [{ b }]) });
		});
		_dynamic_tag($scope1_id, "#text/0", input.on ? list_default : list2_default, { item: $item }, 0, 0, $wg__input_on__OR__input_bs, void 0, 1, $scope0_reason, 2);
		_filled_guard($scope0_reason, 5) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill3", a);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:6_input_bs#0:7/init");
		$scope0_page && $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && a,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:a/13": _write_if($scope0_reason, 5) && $for_content__a__closures
		}, "__tests__/template.marko", "5:2", { a: "5:6" });
	}, 0, $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 5);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.on,
		input_bs: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 7)) && input.bs,
		input_note: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.note,
		n,
		"ClosureScopes:input_note/12": _write_if($scope0_reason, 8) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_bs: ["input.bs"],
		input_note: ["input.note"],
		n: "3:6"
	}) : (_filled_guard($scope0_reason, 6) && ($cg__input_as || $cg__input_bs) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 6)), ($cg__input_as || $cg__input_bs) && _content_withhold(input.on), _filled_guard($scope0_reason, 7) && ($cg__input_as || $cg__input_on) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.bs, !_server_guard($scope0_reason, 7)), ($cg__input_as || $cg__input_on) && _content_withhold(input.bs), _filled_guard($scope0_reason, 8) && _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note, !_server_guard($scope0_reason, 8)));
}, 1);
