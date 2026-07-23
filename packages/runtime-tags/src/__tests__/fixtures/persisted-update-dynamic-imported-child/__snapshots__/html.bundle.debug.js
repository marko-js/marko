// tags/roster.marko
var roster_default = _template("__tests__/tags/roster.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_members = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul class=roster>");
	_for_of(input.members, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__input_members)}</li>`);
		$sg__input_members && writeScope($scope1_id, {}, "__tests__/tags/roster.marko", "2:4");
	}, function(name) {
		return name;
	}, $scope0_id, "#ul/0", $sg__input_members, $sg__input_members, $sg__input_members, "</ul>", 1);
	$sg__input_members && writeScope($scope0_id, {}, "__tests__/tags/roster.marko", 0);
});
_renderer_shells({ "__tests__/tags/roster.marko_0_update": ["<ul class=roster></ul>", " b"] });

// tags/digest.marko
var digest_default = _template("__tests__/tags/digest.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_members = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p class=digest>${_escape(input.members.length)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))} on call: ${_sep($sg__input_members)}${_escape(input.members.join(", "))}${_el_resume($scope0_id, "#text/1", $sg__input_members)}</p>`);
	$sg__input_members && writeScope($scope0_id, {}, "__tests__/tags/digest.marko", 0);
});
_renderer_shells({ "__tests__/tags/digest.marko_0_update": ["<p class=digest><!> on call: <!></p>", "D%c%l"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_members = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 3))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_dynamic_tag($scope0_id, "#text/3", input.view === "roster" ? roster_default : "div", { members: input.members }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/3");
	_dynamic_tag($scope0_id, "#text/4", input.wide ? roster_default : digest_default, { members: input.members }, 0, 0, _serialize_guard($scope0_reason, 2) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/4");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_view: ($si__input_members || _patch_reason()) && input.view,
		input_members: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.members,
		input_wide: ($si__input_members || _patch_reason()) && input.wide,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_view: ["input.view"],
		input_members: ["input.members"],
		input_wide: ["input.wide"],
		count: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%b%c"],
	"__tests__/template.marko": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%b%c"]
});
