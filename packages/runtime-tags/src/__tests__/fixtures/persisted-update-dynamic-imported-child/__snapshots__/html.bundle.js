// tags/roster.marko
var roster_default = _template("c", (input) => {
	const $sg__input_members = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<ul class=roster>");
	_for_of(input.members, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "Qa", name, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_members)}</li>`);
		$sg__input_members && writeScope($scope1_id, {});
	}, function(name) {
		return name;
	}, $scope0_id, "a", $sg__input_members, $sg__input_members, $sg__input_members, "</ul>", 1, "c1");
	$sg__input_members && writeScope($scope0_id, {});
});
_renderer_shells({
	"c1": ["<li> </li>", "D l"],
	"c2": ["<li> </li>", "D l"],
	"c0": ["<ul class=roster></ul>", " b"],
	"c": ["<ul class=roster></ul>", " b"]
});

// tags/digest.marko
var digest_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_members = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p class=digest>${_escape(_hole_value($scope0_id, "Qa", input.members.length, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))} on call: ${_sep($sg__input_members)}${_escape(_hole_value($scope0_id, "Qb", input.members.join(", "), _persisted_reason()))}${_el_resume($scope0_id, "b", $sg__input_members)}</p>`);
	$sg__input_members && writeScope($scope0_id, {});
});
_renderer_shells({
	"b0": ["<p class=digest><!> on call: <!></p>", "D%c%l"],
	"b": ["<p class=digest><!> on call: <!></p>", "D%c%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_members = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 3))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "d", input.view === "roster" ? roster_default : "div", { members: input.members }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "a0");
	_dynamic_tag($scope0_id, "e", input.wide ? roster_default : digest_default, { members: input.members }, 0, 0, _serialize_guard($scope0_reason, 2) | _persisted_reason(), "a1");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		i: ($si__input_members || _patch_reason()) && input.view,
		j: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.members,
		l: ($si__input_members || _patch_reason()) && input.wide,
		n: _state_reason() && count
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%b%c"],
	"a": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%b%c"]
});
