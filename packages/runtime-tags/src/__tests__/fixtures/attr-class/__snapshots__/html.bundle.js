// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_test = _serialize_guard($scope0_reason, 3), $si__input_test = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}></div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 2))}`);
	_if(() => {
		if (input.test) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr_class(input.test.class)} id=test>`);
			_dynamic_tag($scope1_id, "b", input.test.content, {}, 0, 0, _serialize_guard($scope0_reason, 5));
			_html(`</div>${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 4))}`);
			$si__input_test && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $sg__input_test, $sg__input_test, $sg__input_test, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		g: $si__input_test && input.test?.class,
		h: $si__input_test && input.test?.content
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
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_c__OR__input_d = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { c, d, e, f, g, h } = input;
	_html(`<div class=${$class[(c ? 1 : 0) + (d ? 2 : 0)]}></div>${_el_resume($scope0_id, "a", $sg__input_c__OR__input_d)}<div class="a b"></div><div class="a b c"></div><div${c ? " class=active" : ""}></div>${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 8))}<div${_attr_class("base" + (c ? " c" : "") + (d ? " d" : "") + (e ? " e" : "") + (f ? " f" : "") + (g ? " g" : "") + (h ? " h" : ""))}></div>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 7))}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_c__OR__input_d,
		2: $sg__input_c__OR__input_d
	});
	custom_tag_default({ class: ["a", {
		b: c,
		d
	}] });
	custom_tag_default({ class: [
		"a",
		false,
		"b"
	] });
	_dynamic_tag($scope0_id, "f", TestTag, {
		class: ["a", {
			b: c,
			d
		}],
		test: attrTag({
			class: ["a", {
				b: c,
				d
			}],
			content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("Hello");
			}, $scope0_id)
		})
	}, 0, 0, $sg__input_c__OR__input_d);
	_serialize_if($scope0_reason, 7) && writeScope($scope0_id, {
		i: _serialize_if($scope0_reason, 6) && c,
		j: _serialize_if($scope0_reason, 5) && d,
		l: _serialize_if($scope0_reason, 4) && e,
		m: _serialize_if($scope0_reason, 3) && f,
		n: _serialize_if($scope0_reason, 2) && g,
		o: _serialize_if($scope0_reason, 1) && h,
		d: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
