// tags/tag-a/index.marko
var tag_a_default = _template("__tests__/tags/tag-a/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>A `);
	_dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {}, "__tests__/tags/tag-a/index.marko", 0);
});

// tags/tag-b/index.marko
var tag_b_default = _template("__tests__/tags/tag-b/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>B `);
	_dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {}, "__tests__/tags/tag-b/index.marko", 0);
});

// template.marko
const foo = "";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show__OR__input_other = _serialize_guard($scope0_reason, 2), $sg__input_showTagA__OR__input_other = _serialize_guard($scope0_reason, 3), $sg__input_isLarge__OR__input_other = _serialize_guard($scope0_reason, 4), $sg__input_level__OR__input_other = _serialize_guard($scope0_reason, 6), $sg__input_other = _serialize_guard($scope0_reason, 7), $si__input_other = _serialize_if($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const { content, x, show, showTagA, isLarge, tag, level, other } = input;
	_dynamic_tag($scope0_id, "#text/0", content, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 0));
	_dynamic_tag($scope0_id, "#text/1", x, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "#text/2", show ? "div" : null, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "#text/3", show && "div", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "#text/4", isLarge ? "h1" : "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "#text/5", showTagA ? tag_a_default : tag_b_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/6", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/7", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, $sg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/8", tag || tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, _serialize_guard($scope0_reason, 5));
	const largeHeading = isLarge && "h1";
	_dynamic_tag($scope0_id, "#text/9", largeHeading || "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "#text/10", globalThis.x = "a" + "b", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_other);
	_dynamic_tag($scope0_id, "#text/11", "h" + level, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "#text/12", `h${level}`, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "#text/13", "a", {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_other);
	const tagConstB = show ? "div" : null;
	_dynamic_tag($scope0_id, "#text/14", tagConstB, {
		class: ["a", "b"],
		other
	}, 0, 0, $sg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "#text/15", `h${1}`, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/16", foo || "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/17", foo + "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/18", "d" + "iv", {}, 0, 0, 0);
	writeScope($scope0_id, {
		content: $si__input_other && content,
		x: $si__input_other && x,
		show: $si__input_other && show,
		showTagA: $si__input_other && showTagA,
		isLarge: $si__input_other && isLarge,
		tag: $si__input_other && tag,
		level: $si__input_other && level,
		other,
		largeHeading: $si__input_other && largeHeading,
		tagConstB: $si__input_other && tagConstB
	}, "__tests__/template.marko", 0, {
		content: "5:10",
		x: "5:19",
		show: "5:22",
		showTagA: "5:28",
		isLarge: "5:38",
		tag: "5:47",
		level: "5:52",
		other: "5:59",
		largeHeading: "23:8",
		tagConstB: "33:8"
	});
}, 1);
