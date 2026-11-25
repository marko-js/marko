// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "a";
	let b = "b";
	const $return = {
		a,
		aChange: _resume_scoped(function(next) {
			a = next;
		}, "b0", $scope0_id),
		b,
		bChange: _resume_scoped(function(next) {
			b = next;
		}, "b1", $scope0_id)
	};
	_scope($scope0_id, {
		a,
		b
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { a, aChange } = child_default({});
	_var($scope0_id, "b", $childScope, "a4");
	const $childScope2 = _peek_scope_id();
	let { bChange, b } = child_default({});
	_var($scope0_id, "d", $childScope2, "a5");
	const $childScope3 = _peek_scope_id();
	let { a: c, aChange: onC } = child_default({});
	_var($scope0_id, "f", $childScope3, "a6");
	const $childScope4 = _peek_scope_id();
	let { bChange: onD, b: d } = child_default({});
	_var($scope0_id, "h", $childScope4, "a7");
	_html(`<button class=a>${_text_mark($scope0_id, "j", a)} ${_text_mark($scope0_id, "k", typeof aChange, 2)}</button>${_el_mark($scope0_id, "i")}<button class=b>${_text_mark($scope0_id, "m", b)} ${_text_mark($scope0_id, "n", typeof bChange, 2)}</button>${_el_mark($scope0_id, "l")}<button class=c>${_text_mark($scope0_id, "p", c)} ${_text_mark($scope0_id, "q", typeof onC, 2)}</button>${_el_mark($scope0_id, "o")}<button class=d>${_text_mark($scope0_id, "s", d)} ${_text_mark($scope0_id, "t", typeof onD, 2)}</button>${_el_mark($scope0_id, "r")}`);
	const $childScope5 = _peek_scope_id();
	let obj = child_default({});
	_var($scope0_id, "v", $childScope5, "a8");
	const { aChange: obj_aChange, a: e, ...rest } = obj;
	_html(`<button class=e>${_text_mark($scope0_id, "x", e)} ${_text_mark($scope0_id, "y", typeof obj.aChange, 2)} ${_text_mark($scope0_id, "z", Object.keys(rest).join(), 2)}</button>${_el_mark($scope0_id, "w")}`);
	const First = { content: _content("a9", ({ value, valueChange }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button class=first>${_text_mark($scope1_id, "b", value)} ${_escape(typeof valueChange)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a10");
		_scope($scope1_id, {
			f: value,
			g: valueChange
		});
	}, $scope0_id) };
	const Last = { content: _content("a11", ({ valueChange, value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<button class=last>${_text_mark($scope2_id, "b", value)} ${_escape(typeof valueChange)}</button>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a12");
		_scope($scope2_id, {
			f: valueChange,
			g: value
		});
	}, $scope0_id) };
	const FirstRenamed = { content: _content("a13", ({ value, valueChange: onValue }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<button class=first-renamed>${_text_mark($scope3_id, "b", value)} ${_escape(typeof onValue)}</button>${_el_mark($scope3_id, "a")}`);
		_script($scope3_id, "a14");
		_scope($scope3_id, {
			f: value,
			g: onValue
		});
	}, $scope0_id) };
	const LastRenamed = { content: _content("a15", ({ valueChange: onValue, value }) => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<button class=last-renamed>${_text_mark($scope4_id, "b", value)} ${_escape(typeof onValue)}</button>${_el_mark($scope4_id, "a")}`);
		_script($scope4_id, "a16");
		_scope($scope4_id, {
			f: onValue,
			g: value
		});
	}, $scope0_id) };
	let w = "w";
	let x = "x";
	let y = "y";
	let z = "z";
	_set_scope_reason(2);
	const $childScope6 = _peek_scope_id();
	First.content({
		value: w,
		valueChange: _resume_scoped((_new_w) => w = _new_w, "a0", $scope0_id)
	});
	_set_scope_reason(8);
	const $childScope7 = _peek_scope_id();
	Last.content({
		value: x,
		valueChange: _resume_scoped((_new_x) => x = _new_x, "a1", $scope0_id)
	});
	_set_scope_reason(2);
	const $childScope8 = _peek_scope_id();
	FirstRenamed.content({
		value: y,
		valueChange: _resume_scoped((_new_y) => y = _new_y, "a2", $scope0_id)
	});
	_set_scope_reason(8);
	const $childScope9 = _peek_scope_id();
	LastRenamed.content({
		value: z,
		valueChange: _resume_scoped((_new_z) => z = _new_z, "a3", $scope0_id)
	});
	_html(`<div>${_text_mark($scope0_id, "a4", w)} ${_text_mark($scope0_id, "a5", x, 2)} ${_text_mark($scope0_id, "a6", y, 2)} ${_text_mark($scope0_id, "a7", z, 2)}</div>`);
	_script($scope0_id, "a17");
	_script($scope0_id, "a18");
	_script($scope0_id, "a19");
	_script($scope0_id, "a20");
	_script($scope0_id, "a21");
	_scope($scope0_id, {
		a9: a,
		aa: aChange,
		ac: bChange,
		ad: b,
		af: c,
		ag: onC,
		ai: onD,
		aj: d,
		al: obj.aChange,
		am: e,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2),
		e: _existing_scope($childScope3),
		g: _existing_scope($childScope4),
		u: _existing_scope($childScope5),
		a0: _existing_scope($childScope6),
		a1: _existing_scope($childScope7),
		a2: _existing_scope($childScope8),
		a3: _existing_scope($childScope9)
	});
}, 1);
