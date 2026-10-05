// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_test_class = _write_guard($scope0_reason, 4), $wg__input_test_content = _write_guard($scope0_reason, 5), $wg__input_test = _write_guard($scope0_reason, 3), $wg__input_class = _write_guard($scope0_reason, 2), $wi__input_test = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}></div>${_el_resume($scope0_id, "#div/0", $wg__input_class)}`);
	_if(() => {
		if (input.test) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr_class(input.test.class)} id=test>`);
			_dynamic_tag($scope1_id, "#text/1", input.test.content, {}, 0, 0, $wg__input_test_content);
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_test_class)}`);
			$wi__input_test && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/custom-tag.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_test, $wg__input_test, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_test_class: $wi__input_test && input.test?.class,
		input_test_content: $wi__input_test && input.test?.content
	}, "__tests__/tags/custom-tag.marko", 0, {
		input_test_class: ["input.test.class"],
		input_test_content: ["input.test.content"]
	});
});

// template.marko
const TestTag = custom_tag_default;
const $class = [
	"a",
	"\"a b\"",
	"\"a d\"",
	"\"a b d\""
];
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c__OR__input_d = _write_guard($scope0_reason, 0), $wg__input_c__OR__input_d__OR__input_e__OR__input_f__OR__input_g__OR__input_h = _write_guard($scope0_reason, 7), $wg__input_c = _write_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_html(`<div class=${$class[(input.c ? 1 : 0) + (input.d ? 2 : 0)]}></div>${_el_resume($scope0_id, "#div/0", $wg__input_c__OR__input_d)}<div class="a b"></div><div class="a b c"></div><div${input.c ? " class=active" : ""}></div>${_el_resume($scope0_id, "#div/1", $wg__input_c)}<div${_attr_class(`base${input.c ? " c" : ""}${input.d ? " d" : ""}${input.e ? " e" : ""}${input.f ? " f" : ""}${input.g ? " g" : ""}${input.h ? " h" : ""}`)}></div>${_el_resume($scope0_id, "#div/2", $wg__input_c__OR__input_d__OR__input_e__OR__input_f__OR__input_g__OR__input_h)}`);
	_set_scope_reason($wg__input_c__OR__input_d << 1 | $wg__input_c__OR__input_d << 5);
	const $childScope = _peek_scope_id();
	custom_tag_default({ class: ["a", {
		b: input.c,
		d: input.d
	}] });
	custom_tag_default({ class: [
		"a",
		false,
		"b"
	] });
	_dynamic_tag($scope0_id, "#text/5", TestTag, {
		class: ["a", {
			b: input.c,
			d: input.d
		}],
		test: attrTag({
			class: ["a", {
				b: input.c,
				d: input.d
			}],
			content: _content_resume("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("Hello");
			}, $scope0_id)
		})
	}, 0, 0, $wg__input_c__OR__input_d);
	_write_if($scope0_reason, 7) && _scope($scope0_id, {
		c: _write_if($scope0_reason, 6) && input.c,
		d: _write_if($scope0_reason, 5) && input.d,
		e: _write_if($scope0_reason, 4) && input.e,
		f: _write_if($scope0_reason, 3) && input.f,
		g: _write_if($scope0_reason, 2) && input.g,
		h: _write_if($scope0_reason, 1) && input.h,
		"#childScope/3": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		c: "4:10",
		d: "4:13",
		e: "4:16",
		f: "4:19",
		g: "4:22",
		h: "4:25"
	});
}, 1);
