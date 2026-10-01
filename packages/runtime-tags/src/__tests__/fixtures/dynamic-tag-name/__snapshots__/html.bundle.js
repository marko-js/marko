// tags/tag-a/index.marko
var tag_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_class__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>A `);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, $wg__input_content);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_class__OR__input_other)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// tags/tag-b/index.marko
var tag_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_class__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { class: className, other, content } = input;
	_html(`<div${_attr_class(className)}${_attr("data-other", other)}>B `);
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, $wg__input_content);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_class__OR__input_other)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_other = _write_guard($scope0_reason, 2), $wg__input_showTagA__OR__input_other = _write_guard($scope0_reason, 3), $wg__input_tag__OR__input_other = _write_guard($scope0_reason, 5), $wg__input_isLarge__OR__input_other = _write_guard($scope0_reason, 4), $wg__input_level__OR__input_other = _write_guard($scope0_reason, 6), $wg__input_other = _write_guard($scope0_reason, 9), $wg__input_content__OR__input_other = _write_guard($scope0_reason, 0), $wg__input_x__OR__input_other = _write_guard($scope0_reason, 1), $wi__input_other = _write_if($scope0_reason, 9);
	const $scope0_id = _scope_id();
	const { content, x, show, showTagA, isLarge, tag, level, other } = input;
	_dynamic_tag($scope0_id, "a", content, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_content__OR__input_other);
	_dynamic_tag($scope0_id, "b", x, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_x__OR__input_other);
	_dynamic_tag($scope0_id, "c", show ? "div" : null, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "d", show && "div", {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_show__OR__input_other);
	_dynamic_tag($scope0_id, "e", isLarge ? "h1" : "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "f", showTagA ? tag_a_default : tag_b_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "g", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "h", showTagA && tag_a_default, {
		class: ["a", "b"],
		other
	}, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, $wg__input_showTagA__OR__input_other);
	_dynamic_tag($scope0_id, "i", tag || tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_tag__OR__input_other);
	_dynamic_tag($scope0_id, "j", tag ?? tag_a_default, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_tag__OR__input_other);
	const largeHeading = isLarge && "h1";
	_dynamic_tag($scope0_id, "k", largeHeading || "h2", {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_isLarge__OR__input_other);
	_dynamic_tag($scope0_id, "l", globalThis.x = "ab", {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_other);
	_dynamic_tag($scope0_id, "m", "h" + level, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_level__OR__input_other);
	_dynamic_tag($scope0_id, "n", `h${level}`, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_level__OR__input_other);
	const tagConstA = "a";
	_dynamic_tag($scope0_id, "o", tagConstA, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_other);
	const tagConstB = show ? "div" : null;
	_dynamic_tag($scope0_id, "p", tagConstB, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_show__OR__input_other);
	const tagConstC = tag ?? tag_a_default;
	_dynamic_tag($scope0_id, "q", tagConstC, {
		class: ["a", "b"],
		other
	}, 0, 0, $wg__input_tag__OR__input_other);
	_dynamic_tag($scope0_id, "r", `h1`, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "s", "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "t", "div", {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "u", "div", {}, 0, 0, 0);
	_write_if($scope0_reason, 8) && _scope($scope0_id, {
		x: $wi__input_other && content,
		y: $wi__input_other && x,
		z: $wi__input_other && show,
		a0: $wi__input_other && showTagA,
		a1: $wi__input_other && isLarge,
		a2: $wi__input_other && tag,
		a3: $wi__input_other && level,
		a4: _write_if($scope0_reason, 7) && other,
		ac: $wi__input_other && largeHeading,
		ae: $wi__input_other && tagConstA,
		ag: $wi__input_other && tagConstB,
		ai: $wi__input_other && tagConstC
	});
}, 1);
