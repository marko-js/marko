// template.marko
const $Card_content__walks = "D%b%l";
const $Card_content__template = "<p><!><!></p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_7*content": "__tests__/template.marko_7*content __tests__/template.marko_7_n#2:11/init",
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content __tests__/template.marko_6_n#2:11/init;D%c%;<i><!> <!></i>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content __tests__/template.marko_5_n#2:11/init",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell !__tests__/template.marko_2;${/*@__PURE__*/ ((_w0) => `D D l/${_w0}&%b%l`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<section><button> </button>${_w0}<!><!></section>`)($Card_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_1*content", ({ label, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2);
		_html(`<p>${_text_resume($scope1_id, "#text/0", label, 1, $scope1_reason, 1)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 2, 0, 0, $wg__content, $scope1_reason, 2);
				_write_if($scope1_reason, 0) && _scope($scope4_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:15");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope1_reason, 1), 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope1_reason, 1);
		_html("</p>");
		_client_guard($scope1_reason, 1) && _patch_write($scope1_id, "PatchWrite:content", content, 1);
		_scope($scope1_id, { content: _unfilled_if($scope1_reason, 1) && content }, "__tests__/template.marko", "1:2", { content: "1:23" });
	}, $scope0_id) };
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		const $for_content__n__closures = new Set();
		let n = 0;
		const Label = { content: _content_resume("__tests__/template.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_html(`<em>${_text_resume($scope5_id, "#text/0", row.label, 1, $scope0_reason, 0)} ${_text_resume($scope5_id, "#text/1", n, 2)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope5_id, $cg__input_rows ? "__tests__/template.marko_5_row_label#2:7/init" : "__tests__/template.marko_5_row_label#2:7/subscribe");
			_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope5_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:4")));
		}, $scope2_id, ($scope) => $scope0_page ? [{ row_label: row?.label }] : []) };
		_html(`<section><button>${_text_resume($scope2_id, "#text/1", n)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/2", 1);
		Card.content({
			label: "direct",
			content: _content("__tests__/template.marko_6*content", () => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html(`<i>${_text_resume($scope6_id, "#text/0", row.label, 1, $scope0_reason, 0)} ${_text_resume($scope6_id, "#text/1", n, 2)}</i>`);
				$cg__input_rows && _patch_init($scope6_id, "__tests__/template.marko_6_row_label#2:7/init");
				_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope6_id, {
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:row_label/13": $wi__input_rows && 1,
					"ClosureSignalIndex:n/15": 1
				}, "__tests__/template.marko", "9:6")));
			}, $scope2_id, 1)
		});
		_patch_child_end();
		_dynamic_tag($scope2_id, "#text/3", row.card ? Card : "span", { label: "dynamic" }, 17, _content_resume("__tests__/template.marko_7*content", () => {
			const $scope7_id = _scope_id();
			const $scope7_reason = _scope_reason();
			_html(`<b>${_text_resume($scope7_id, "#text/0", row.label, 1, $scope0_reason, 0)} ${_text_resume($scope7_id, "#text/1", n, 2)}</b>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope7_id, $cg__input_rows ? "__tests__/template.marko_7_row_label#2:7/init" : "__tests__/template.marko_7_row_label#2:7/subscribe");
			_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope7_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:row_label/13": $wi__input_rows && 2,
				"ClosureSignalIndex:n/15": 2
			}, "__tests__/template.marko", "10:8")));
		}, $scope2_id, ($scope2) => $scope0_page ? [{ row_label: row?.label }] : []), 0, $wg__input_rows, $scope0_reason, 0);
		_for_of(row.tags, (tag) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "#text/0", row.card ? Card : "span", {
				label: tag,
				content: Label
			}, 25, 0, 0, $wg__input_rows, $scope0_reason, 0);
			$cg__input_rows && _patch_init($scope3_id, "__tests__/template.marko_3_Card#0:4_row_card#2:8_Label#2:12_tag#2/init");
			$wi__input_rows && _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:6");
		}, 0, $scope2_id, "#text/4", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 0);
		_html("</section>");
		_script($scope2_id, "__tests__/template.marko_2");
		_filled_guard($scope0_reason, 0) && (_content_withheld("__tests__/template.marko_5*content", $scope2_id) || $cg__input_rows || _content_withheld("__tests__/template.marko_7*content", $scope2_id)) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill0", row?.label);
		$cg__input_rows && _patch_write($scope2_id, "PatchWrite:Label", Label, 1);
		$cg__input_rows && _patch_init($scope2_id, "__tests__/template.marko_2_Card#0:4_row_card#8/init");
		_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
		_scope($scope2_id, {
			n,
			Label: _unfilled_if($scope0_reason, 0) && Label,
			_: $wi__input_rows && _scope_with_id($scope0_id),
			"ClosureScopes:row_label/13": $wi__input_rows && $for_content__row_label__closures,
			"ClosureScopes:n/15": $for_content__n__closures,
			"#childScope/2": _existing_scope($childScope)
		}, "__tests__/template.marko", "4:2", {
			n: "5:8",
			Label: "6:11"
		});
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_scope($scope0_id, { Card: _unfilled_if($scope0_reason, 0) && Card }, "__tests__/template.marko", 0, { Card: "1:9" });
}, 1);
