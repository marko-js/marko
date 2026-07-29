// data.js
const OPTS = { label: "PRIORITY-SUPPORT-TIER-LABEL" };
const getOpts = typeof window === "undefined" ? () => OPTS : undefined;
const getNoteLabel = typeof window === "undefined" ? () => OPTS.label : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cards = _serialize_guard($scope0_reason, 0), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=cards>`);
	_for_of(input.cards, (card) => {
		const $scope2_id = _scope_id();
		let opts = getOpts?.(card.id);
		let pinned = false;
		_html(`<li class=card><span class=name>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", card.name, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", $sg__input_cards)}</span><button class=pin>${_escape(_hole_value($scope2_id, "PatchHole:#text/2", pinned ? "pinned" : "pin", _state_reason()))}${_el_resume($scope2_id, "#text/2")}</button>${_el_resume($scope2_id, "#button/1")}</li>`);
		_script($scope2_id, "__tests__/template.marko_2_opts_label");
		writeScope($scope2_id, {
			opts: _state_reason() && opts,
			opts_label: _state_reason() && opts?.label,
			pinned: _seed_fill(_state_reason() && pinned)
		}, "__tests__/template.marko", "8:4", {
			opts: "9:10",
			opts_label: ["opts.label", "9:10"],
			pinned: "10:10"
		});
	}, function(card) {
		return card.id;
	}, $scope0_id, "#ul/2", $sg__input_cards, $sg__input_cards, $sg__input_cards, "</ul>", 1, "__tests__/template.marko_2_update");
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.note, 1), (note) => {
			const $scope4_id = _scope_id();
			_html(`<p class=note>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", getNoteLabel?.(), _persisted_reason()))}${_el_resume($scope4_id, "#text/0")} ${_sep($sg__input_note)}${_escape(_hole_value($scope4_id, "PatchHole:#text/1", note.stamp, _persisted_reason()))}${_el_resume($scope4_id, "#text/1", $sg__input_note)}</p>`);
			$sg__input_note && writeScope($scope4_id, {}, "__tests__/template.marko", "21:4");
		}, $sg__input_note, "__tests__/template.marko_4_update");
		$sg__input_note && _subscribe($input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "19:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("<p class=loading>loading…</p>");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/3", "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:input_note": $sg__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<p class=note><!> <!></p>", "D%c%l"],
	"__tests__/template.marko_4_content": ["<p class=note><!> <!></p>", "D%c%l"],
	"__tests__/template.marko_2_update": ["<li class=card><span class=name> </span><button class=pin> </button></li>", "E l D m"],
	"__tests__/template.marko_2_content": ["<li class=card><span class=name> </span><button class=pin> </button></li>", "E l D m"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=cards></ul><!><!>", " Db%l b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=cards></ul><!><!>", " Db%l b%c"]
});
