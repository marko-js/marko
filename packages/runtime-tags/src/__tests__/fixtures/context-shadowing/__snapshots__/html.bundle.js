// counter.js
let n = 0;
function next() {
	return "p" + ++n;
}

// provider.marko
var provider_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("b", next(), () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// consumer.marko
var consumer_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_escape(_context_get("b"))}${_el_resume($scope0_id, "a")}</li>`);
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	provider_default({ content: _content("c1", () => {
		_scope_reason();
		_scope_id();
		consumer_default({});
		provider_default({ content: _content("c0", () => {
			_scope_reason();
			_scope_id();
			consumer_default({});
		}) });
		consumer_default({});
	}) });
	forOf([
		"x",
		"y",
		"z"
	], (item) => {
		_scope_id();
		provider_default({ content: _content("c2", () => {
			_scope_reason();
			_scope_id();
			consumer_default({});
		}) });
	});
}, 1);
