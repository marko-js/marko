// tags/icons/icon-star.marko
var icon_star_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=icon-star>star</span>");
});

// tags/util/greeting.marko
var greeting_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p>Hello, ${_sep($sg__input_name)}${_escape(input.name)}${_el_resume($scope0_id, "a", $sg__input_name)}!</p>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	icon_star_default({});
	greeting_default({ name: "Marko" });
}, 1);
