// tags/tag-a/index.marko
var tag_a_default = _template("__tests__/tags/tag-a/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_class__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}${_attr("data-other", input.other)}>A `);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_class__OR__input_other)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/tag-a/index.marko", 0);
});

// tags/tag-b/index.marko
var tag_b_default = _template("__tests__/tags/tag-b/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_class__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}${_attr("data-other", input.other)}>B `);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_class__OR__input_other)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/tag-b/index.marko", 0);
});

// template.marko
const foo = "";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_other = _write_guard($scope0_reason, 2), $wg__input_showTagA__OR__input_other = _write_guard($scope0_reason, 3), $wg__input_tag__OR__input_other = _write_guard($scope0_reason, 5), $wg__input_isLarge__OR__input_other = _write_guard($scope0_reason, 4), $wg__input_level__OR__input_other = _write_guard($scope0_reason, 6), $wg__input_other = _write_guard($scope0_reason, 9), $wg__input_content__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_x__OR__input_other = _write_guard($scope0_reason, 1), $wi__input_other = _write_if($scope0_reason, 9);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_content__OR__input_other);
	_dynamic_tag($scope0_id, "#text/1", input.x, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_x__OR__input_other);
	_dynamic_tag($scope0_id, "#text/2", input.show ? "div" : null, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "#text/3", input.show && "div", {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "#text/4", input.isLarge ? "h1" : "h2", {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "#text/5", input.showTagA ? tag_a_default : tag_b_default, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/6", input.showTagA && tag_a_default, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/7", input.showTagA && tag_a_default, {
		class: ["a", "b"],
		other: input.other
	}, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "#text/8", input.tag || tag_a_default, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_tag__OR__input_other);
	_dynamic_tag($scope0_id, "#text/9", input.tag ?? tag_a_default, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_tag__OR__input_other);
	const largeHeading = input.isLarge && "h1";
	_dynamic_tag($scope0_id, "#text/10", largeHeading || "h2", {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "#text/11", globalThis.x = "a" + "b", {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_other);
	_dynamic_tag($scope0_id, "#text/12", "h" + input.level, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "#text/13", `h${input.level}`, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_level__OR__input_other);
	const tagConstA = "a";
	_dynamic_tag($scope0_id, "#text/14", tagConstA, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_other);
	const tagConstB = input.show ? "div" : null;
	_dynamic_tag($scope0_id, "#text/15", tagConstB, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_show__OR__input_other);
	const tagConstC = input.tag ?? tag_a_default;
	_dynamic_tag($scope0_id, "#text/16", tagConstC, {
		class: ["a", "b"],
		other: input.other
	}, 0, 0, $wg__input_tag__OR__input_other);
	_dynamic_tag($scope0_id, "#text/17", `h${1}`, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/18", foo || "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/19", foo + "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/20", "d" + "iv", {}, 0, 0, 0);
	_write_if($scope0_reason, 8) && _scope($scope0_id, {
		content: $wi__input_other && input.content,
		x: $wi__input_other && input.x,
		show: $wi__input_other && input.show,
		showTagA: $wi__input_other && input.showTagA,
		isLarge: $wi__input_other && input.isLarge,
		tag: $wi__input_other && input.tag,
		level: $wi__input_other && input.level,
		other: _write_if($scope0_reason, 7) && input.other,
		largeHeading: $wi__input_other && largeHeading,
		tagConstA: $wi__input_other && tagConstA,
		tagConstB: $wi__input_other && tagConstB,
		tagConstC: $wi__input_other && tagConstC
	}, "__tests__/template.marko", 0, {
		content: "5:10",
		x: "5:19",
		show: "5:22",
		showTagA: "5:28",
		isLarge: "5:38",
		tag: "5:47",
		level: "5:52",
		other: "5:59",
		largeHeading: "24:8",
		tagConstA: "31:8",
		tagConstB: "34:8",
		tagConstC: "37:8"
	});
}, 1);
