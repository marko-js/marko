// tags/info-card.marko
var info_card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h3 class=card-title>${_escape(input.title)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h3><p class=card-note>${_escape(input.note)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</p>`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});
_renderer_shells({ "b0": ["<h3 class=card-title> </h3><p class=card-note> </p>", "D lD l"] });

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title__OR__input_note = _serialize_guard($scope0_reason, 0), $sg__input_title2__OR__input_note = _serialize_guard($scope0_reason, 1), $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note = _serialize_guard($scope0_reason, 2), $si__input_show = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.show ? 0 : void 0, $scope0_id, "c", $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note, $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note, _serialize_guard($scope0_reason, 3), 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<section class=arrived><button class=inner>inner</button>${_el_resume($scope1_id, "a")}`);
		_set_serialize_reason({
			0: $sg__input_title__OR__input_note,
			1: _serialize_guard($scope0_reason, 4),
			2: _serialize_guard($scope0_reason, 5)
		});
		const $childScope = _peek_scope_id();
		_region(() => {
			info_card_default({
				title: input.title,
				note: input.note
			});
		}, $scope1_id, "c", "a2");
		_set_serialize_reason({
			0: $sg__input_title2__OR__input_note,
			1: _serialize_guard($scope0_reason, 6),
			2: _serialize_guard($scope0_reason, 7)
		});
		const $childScope2 = _peek_scope_id();
		_region(() => {
			info_card_default({
				title: input.title2,
				note: input.note2
			});
		}, $scope1_id, "e", "a3");
		_html("</section>");
		_script($scope1_id, "a4");
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: $sg__input_title__OR__input_note | _persisted_reason() && _existing_scope($childScope),
			d: $sg__input_title2__OR__input_note | _persisted_reason() && _existing_scope($childScope2)
		});
	}], ["a5"], "a6");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		g: ($si__input_show || _patch_reason()) && input.title,
		h: ($si__input_show || _patch_reason()) && input.note,
		i: ($si__input_show || _patch_reason()) && input.title2,
		j: ($si__input_show || _patch_reason()) && input.note2,
		k: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<section class=arrived><button class=inner>inner</button><!><!></section>", "D b/&%b/&%l"],
	"a8": ["<section class=arrived><button class=inner>inner</button><!><!></section>", "D b/&%b/&%l"],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
