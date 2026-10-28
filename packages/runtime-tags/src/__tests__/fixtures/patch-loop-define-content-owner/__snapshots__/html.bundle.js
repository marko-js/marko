// template.marko
const $Card_content__walks = "D%b%l";
const $Card_content__template = "<p><!><!></p>";
_shells({
	a1: "a1 a18",
	a2: "a2 a20;D%c%;<i><!> <!></i>",
	a3: "a3 a22",
	a4: "a4",
	a: "a;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5 !a13;${/*@__PURE__*/ ((_w0) => `D D l/${_w0}&%b%l`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<section><button> </button>${_w0}<!><!></section>`)($Card_content__template)}`)(),
	a6: "a6;b%;<!><!><!>",
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a4", ({ label, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2);
		_html(`<p>${_text_resume($scope1_id, "a", label, void 0, $scope1_reason, 1)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 2, 0, 0, $wg__content, $scope1_reason, 2);
				_write_if($scope1_reason, 0) && _scope($scope4_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 1), void 0, void 0, void 0, ["a0"], $scope1_reason, 1);
		_html("</p>");
		_client_guard($scope1_reason, 1) && _patch_write($scope1_id, "wf", content, 1);
		_scope($scope1_id, { f: _unfilled_if($scope1_reason, 1) && content });
	}, $scope0_id) };
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		const $for_content__n__closures = /* @__PURE__ */ new Set();
		let n = 0;
		const Label = { content: _content_resume("a3", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope5_id, "a", row.label, void 0, $scope0_reason, 0)} ${_text_resume($scope5_id, "b", n, 2)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope5_id, $cg__input_rows ? "a7" : "a8");
			_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope5_id, { _: _scope_with_id($scope2_id) })));
		}, $scope2_id) };
		_html(`<section><button>${_text_resume($scope2_id, "b", n)}</button>${_el_resume($scope2_id, "a")}`);
		_set_scope_reason(0);
		const $childScope = _patch_child($scope2_id, "c", 1);
		Card.content({
			label: "direct",
			content: _content_elide("a2", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html(`<i>${_text_resume($scope6_id, "a", row.label, void 0, $scope0_reason, 0)} ${_text_resume($scope6_id, "b", n, 2)}</i>`);
				$cg__input_rows && _patch_init($scope6_id, "a9");
				_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope6_id, {
					_: _scope_with_id($scope2_id),
					Cn: $wi__input_rows && 1,
					Cp: 1
				})));
			}, $scope2_id)
		});
		_patch_child_end();
		_dynamic_tag($scope2_id, "d", row.card ? Card : "span", { label: "dynamic" }, 17, _content_resume("a1", () => {
			const $scope7_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_resume($scope7_id, "a", row.label, void 0, $scope0_reason, 0)} ${_text_resume($scope7_id, "b", n, 2)}</b>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope7_id, $cg__input_rows ? "a10" : "a11");
			_subscribe($for_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope7_id, {
				_: _scope_with_id($scope2_id),
				Cn: $wi__input_rows && 2,
				Cp: 2
			})));
		}, $scope2_id, ($scope) => $scope0_page ? [{ h: row?.label }] : []), 0, $wg__input_rows, $scope0_reason, 0);
		_for_of(row.tags, (tag) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", row.card ? Card : "span", {
				label: tag,
				content: Label
			}, 25, 0, 0, $wg__input_rows, $scope0_reason, 0);
			$cg__input_rows && _patch_init($scope3_id, "a12");
			$wi__input_rows && _scope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, 0, $scope2_id, "e", 1, void 0, void 0, void 0, void 0, "a6", $scope0_reason, 0);
		_html("</section>");
		_script($scope2_id, "a13");
		_filled_guard($scope0_reason, 0) && (_content_withheld("a3", $scope2_id) || $cg__input_rows || _content_withheld("a1", $scope2_id)) && _patch_fill($scope2_id, "va14", row?.label);
		$cg__input_rows && _patch_write($scope2_id, "wm", Label, 1);
		$cg__input_rows && _patch_init($scope2_id, "a15");
		_patch_fill($scope2_id, "va16", n, 1);
		_scope($scope2_id, {
			l: n,
			m: _unfilled_if($scope0_reason, 0) && Label,
			_: $wi__input_rows && _scope_with_id($scope0_id),
			n: $wi__input_rows && $for_content__row_label__closures,
			p: $for_content__n__closures,
			c: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 0);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && Card });
}, 1);
