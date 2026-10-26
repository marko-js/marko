// tags/card.marko
const $template$1 = "<button id=toggle>fail</button><!><!>";
const $walks$1 = " b%c";
function boom() {
	throw new Error("boom");
}
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_3*content": "__tests__/tags/card.marko_3*content __tests__/tags/card.marko_3_fail#0:5/init;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button id=toggle>fail</button><!><!>",
	"__tests__/tags/card.marko_2*shell": "__tests__/tags/card.marko_2*shell __tests__/tags/card.marko_2_input_content#0:4/subscribe;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $fail__closures = new Set();
	let fail = false;
	_html(`<button id=toggle>fail</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		if ($scope0_page) _if(() => {
			if (fail) {
				const $scope4_id = _scope_id();
				_html(_escape(boom()));
				$scope0_page && _scope($scope4_id, {}, "__tests__/tags/card.marko", "13:4");
				return 0;
			}
		}, $scope3_id, "#text/0");
		$scope0_page && _subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "6:2"), "__tests__/tags/card.marko_3_fail#0:5/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<i>${_patch_text($scope1_id, "#text/0", err.message)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/tags/card.marko_2_input_content#0:4/init");
				$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "9:6"), "__tests__/tags/card.marko_2_input_content#0:4/subscribe", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["__tests__/tags/card.marko_2*shell"]);
		$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "7:4");
	}, void 0, "__tests__/tags/card.marko_1*content", "__tests__/tags/card.marko_3*content", 1, 1, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", fail, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		"ClosureScopes:input_content/6": _write_if($scope0_reason, 0) && $input_content__closures,
		"ClosureScopes:fail/7": $fail__closures
	}, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_note#0:4/init" : "__tests__/template.marko_1_input_note#0:4/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
}, 1);
