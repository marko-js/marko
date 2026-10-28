// tags/plain.marko
var plain_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>plain</span>");
});

// tags/field.marko
var field_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// tags/thrower.marko
function fail() {
	throw new Error("thrown");
}
var thrower_default = _template("e", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<p>${_escape(fail())}</p>`);
});

// tags/a-tag.marko
var a_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	plain_default({});
	_set_scope_reason($wg__input_n << 3 | $wg__input_n << 7);
	const $childScope = _peek_scope_id();
	field_default({ name: input.n });
	_try($scope0_id, "c", () => {
		_scope_reason();
		_scope_id();
		thrower_default({});
	}, void 0, (error) => {
		_scope_reason();
		_scope_id();
		_html("caught");
	}, void 0, "b0");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		a_tag_default({ n: row.id });
		field_default({ name: `row ${row.id}` });
		$wi__input_rows && _scope($scope1_id, {});
	}, "id", $scope0_id, "a", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {});
}, 1);
