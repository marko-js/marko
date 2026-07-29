// data.js
const OPTS = { label: "PRIORITY-SUPPORT-TIER-LABEL" };
const getOpts = typeof window === "undefined" ? () => OPTS : void 0;
const getNoteLabel = typeof window === "undefined" ? () => OPTS.label : void 0;

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cards = _serialize_guard($scope0_reason, 0), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=cards>`);
	_for_of(input.cards, (card) => {
		const $scope2_id = _scope_id();
		let opts = getOpts?.(card.id);
		let pinned = false;
		_html(`<li class=card><span class=name>${_escape(_hole_value($scope2_id, "Qa", card.name, _persisted_reason()))}${_el_resume($scope2_id, "a", $sg__input_cards)}</span><button class=pin>${_escape(_hole_value($scope2_id, "Qc", "pin", _state_reason()))}${_el_resume($scope2_id, "c")}</button>${_el_resume($scope2_id, "b")}</li>`);
		_script($scope2_id, "a2");
		writeScope($scope2_id, {
			h: _state_reason() && opts,
			i: _state_reason() && opts?.label,
			j: _seed_fill(_state_reason() && pinned)
		});
	}, function(card) {
		return card.id;
	}, $scope0_id, "c", $sg__input_cards, $sg__input_cards, $sg__input_cards, "</ul>", 1, "a3");
	_try($scope0_id, "d", _content_resume("a6", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.note, 1), (note) => {
			const $scope4_id = _scope_id();
			_html(`<p class=note>${_escape(_hole_value($scope4_id, "Qa", getNoteLabel?.(), _persisted_reason()))}${_el_resume($scope4_id, "a")} ${_sep($sg__input_note)}${_escape(_hole_value($scope4_id, "Qb", note.stamp, _persisted_reason()))}${_el_resume($scope4_id, "b", $sg__input_note)}</p>`);
			$sg__input_note && writeScope($scope4_id, {});
		}, $sg__input_note, "a4");
		$sg__input_note && _subscribe($input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
		_scope_reason();
		_scope_id();
		_html("<p class=loading>loading…</p>");
	}, $scope0_id) }) }, "a0", "a7");
	_script($scope0_id, "a8");
	writeScope($scope0_id, {
		i: _seed_fill(_state_reason() && count),
		j: $sg__input_note && $input_note__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<p class=note><!> <!></p>", "D%c%l"],
	"a9": ["<p class=note><!> <!></p>", "D%c%l"],
	"a3": ["<li class=card><span class=name> </span><button class=pin> </button></li>", "E l D m"],
	"a10": ["<li class=card><span class=name> </span><button class=pin> </button></li>", "E l D m"],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a1": ["<button class=count>clicked <!></button><ul class=cards></ul><!><!>", " Db%l b%c"],
	"a": ["<button class=count>clicked <!></button><ul class=cards></ul><!><!>", " Db%l b%c"]
});
