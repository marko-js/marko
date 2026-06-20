// tags/tag-a/index.marko
var tag_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>A `);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {});
});

// tags/tag-b/index.marko
var tag_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>B `);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {});
});

// template.marko
const foo = "";
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show__OR__input_other = _serialize_guard($scope0_reason, 2), $sg__input_showTagA__OR__input_other = _serialize_guard($scope0_reason, 3), $sg__input_isLarge__OR__input_other = _serialize_guard($scope0_reason, 4), $sg__input_level__OR__input_other = _serialize_guard($scope0_reason, 6), $sg__input_other = _serialize_guard($scope0_reason, 7), $si__input_other = _serialize_if($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const { content, x, show, showTagA, isLarge, tag, level, other } = input;
	_dynamic_tag($scope0_id, "a", content, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 0));
	_dynamic_tag($scope0_id, "b", x, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "c", show ? "div" : null, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "d", show && "div", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "e", isLarge ? "h1" : "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "f", showTagA ? tag_a_default : tag_b_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "g", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "h", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "i", tag || tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 5));
	const largeHeading = isLarge && "h1";
	_dynamic_tag($scope0_id, "j", largeHeading || "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "k", globalThis.x = "ab", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_other);
	_dynamic_tag($scope0_id, "l", "h" + level, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "m", `h${level}`, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "n", "a", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_other);
	const tagConstB = show ? "div" : null;
	_dynamic_tag($scope0_id, "o", tagConstB, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "p", `h1`, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "q", "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "r", foo + "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "s", "div", {}, 0, 0, 0);
	writeScope($scope0_id, {
		v: $si__input_other && content,
		w: $si__input_other && x,
		x: $si__input_other && show,
		y: $si__input_other && showTagA,
		z: $si__input_other && isLarge,
		a0: $si__input_other && tag,
		a1: $si__input_other && level,
		a2: other,
		aa: $si__input_other && largeHeading,
		ae: $si__input_other && tagConstB
	});
}, 1);
