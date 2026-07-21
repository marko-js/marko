// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_recs = _serialize_guard($scope0_reason, 1), $si__input_recs = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_recs__closures = new Set();
	let qty = 1;
	_html(`<h1>${_escape(input.title)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><input${_attr_input_value($scope0_id, "#input/1", qty, _resume((_new_qty) => {
		qty = _new_qty;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))} type=number>${_el_resume($scope0_id, "#input/1")}<button>add <!>${_escape(qty)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section>`);
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.recs, 1), (recs) => {
			const $scope3_id = _scope_id();
			_html("<div>");
			_for_of(recs, (rec) => {
				const $scope4_id = _scope_id();
				_html(`<span>${_escape(rec.name)}${_el_resume($scope4_id, "#text/0", $sg__input_recs)}</span>`);
				$si__input_recs && writeScope($scope4_id, {}, "__tests__/template.marko", "12:10");
			}, function(rec) {
				return rec.id;
			}, $scope3_id, "#div/0", $sg__input_recs, $sg__input_recs, $sg__input_recs, "</div>", 1);
			$si__input_recs && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, $sg__input_recs);
		$si__input_recs && _subscribe($input_recs__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) });
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		qty,
		"ClosureScopes:input_recs": $si__input_recs && $input_recs__closures
	}, "__tests__/template.marko", 0, { qty: "3:6" });
	_resume_branch($scope0_id);
}, 1);
