// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "a";
	let b = "b";
	const $return = {
		a,
		aChange: _resume(function(next) {
			a = next;
		}, "__tests__/tags/child.marko_0/_return", $scope0_id),
		b,
		bChange: _resume(function(next) {
			b = next;
		}, "__tests__/tags/child.marko_0/_return2", $scope0_id)
	};
	_scope($scope0_id, {
		a,
		b
	}, "__tests__/tags/child.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { a, aChange } = child_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_$pattern#34/var");
	const $childScope2 = _peek_scope_id();
	let { bChange, b } = child_default({});
	_var($scope0_id, "#scopeOffset/3", $childScope2, "__tests__/template.marko_0_$pattern2#37/var");
	const $childScope3 = _peek_scope_id();
	let { a: c, aChange: onC } = child_default({});
	_var($scope0_id, "#scopeOffset/5", $childScope3, "__tests__/template.marko_0_$pattern3#40/var");
	const $childScope4 = _peek_scope_id();
	let { bChange: onD, b: d } = child_default({});
	_var($scope0_id, "#scopeOffset/7", $childScope4, "__tests__/template.marko_0_$pattern4#43/var");
	_html(`<button class=a>${_text_mark($scope0_id, "#text/9", a)} ${_text_mark($scope0_id, "#text/10", typeof aChange, 2)}</button>${_el_mark($scope0_id, "#button/8")}<button class=b>${_text_mark($scope0_id, "#text/12", b)} ${_text_mark($scope0_id, "#text/13", typeof bChange, 2)}</button>${_el_mark($scope0_id, "#button/11")}<button class=c>${_text_mark($scope0_id, "#text/15", c)} ${_text_mark($scope0_id, "#text/16", typeof onC, 2)}</button>${_el_mark($scope0_id, "#button/14")}<button class=d>${_text_mark($scope0_id, "#text/18", d)} ${_text_mark($scope0_id, "#text/19", typeof onD, 2)}</button>${_el_mark($scope0_id, "#button/17")}`);
	const $childScope5 = _peek_scope_id();
	let obj = child_default({});
	_var($scope0_id, "#scopeOffset/21", $childScope5, "__tests__/template.marko_0_obj#46/var");
	const { aChange: obj_aChange, a: e, ...rest } = obj;
	_html(`<button class=e>${_text_mark($scope0_id, "#text/23", e)} ${_text_mark($scope0_id, "#text/24", typeof obj.aChange, 2)} ${_text_mark($scope0_id, "#text/25", Object.keys(rest).join(), 2)}</button>${_el_mark($scope0_id, "#button/22")}`);
	const First = { content: _content("__tests__/template.marko_1*content", ({ value, valueChange }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button class=first>${_text_mark($scope1_id, "#text/1", value)} ${_escape(typeof valueChange)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_valueChange#6");
		_scope($scope1_id, {
			value,
			valueChange
		}, "__tests__/template.marko", "12:2", {
			value: "12:17",
			valueChange: "12:24"
		});
	}, $scope0_id) };
	const Last = { content: _content("__tests__/template.marko_2*content", ({ valueChange, value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<button class=last>${_text_mark($scope2_id, "#text/1", value)} ${_escape(typeof valueChange)}</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_valueChange#5");
		_scope($scope2_id, {
			valueChange,
			value
		}, "__tests__/template.marko", "15:2", {
			valueChange: "15:16",
			value: "15:29"
		});
	}, $scope0_id) };
	const FirstRenamed = { content: _content("__tests__/template.marko_3*content", ({ value, valueChange: onValue }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<button class=first-renamed>${_text_mark($scope3_id, "#text/1", value)} ${_escape(typeof onValue)}</button>${_el_mark($scope3_id, "#button/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_onValue#6");
		_scope($scope3_id, {
			value,
			onValue
		}, "__tests__/template.marko", "18:2", {
			value: "18:24",
			onValue: "18:44"
		});
	}, $scope0_id) };
	const LastRenamed = { content: _content("__tests__/template.marko_4*content", ({ valueChange: onValue, value }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html(`<button class=last-renamed>${_text_mark($scope4_id, "#text/1", value)} ${_escape(typeof onValue)}</button>${_el_mark($scope4_id, "#button/0")}`);
		_script($scope4_id, "__tests__/template.marko_4_onValue#5");
		_scope($scope4_id, {
			onValue,
			value
		}, "__tests__/template.marko", "21:2", {
			onValue: "21:36",
			value: "21:45"
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
		valueChange: _resume((_new_w) => w = _new_w, "__tests__/template.marko_0/valueChange3", $scope0_id)
	});
	_set_scope_reason(8);
	const $childScope7 = _peek_scope_id();
	Last.content({
		value: x,
		valueChange: _resume((_new_x) => x = _new_x, "__tests__/template.marko_0/valueChange4", $scope0_id)
	});
	_set_scope_reason(2);
	const $childScope8 = _peek_scope_id();
	FirstRenamed.content({
		value: y,
		valueChange: _resume((_new_y) => y = _new_y, "__tests__/template.marko_0/valueChange5", $scope0_id)
	});
	_set_scope_reason(8);
	const $childScope9 = _peek_scope_id();
	LastRenamed.content({
		value: z,
		valueChange: _resume((_new_z) => z = _new_z, "__tests__/template.marko_0/valueChange6", $scope0_id)
	});
	_html(`<div>${_text_mark($scope0_id, "#text/30", w)} ${_text_mark($scope0_id, "#text/31", x, 2)} ${_text_mark($scope0_id, "#text/32", y, 2)} ${_text_mark($scope0_id, "#text/33", z, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_obj_aChange#47");
	_script($scope0_id, "__tests__/template.marko_0_onD#44");
	_script($scope0_id, "__tests__/template.marko_0_onC#42");
	_script($scope0_id, "__tests__/template.marko_0_bChange#38");
	_script($scope0_id, "__tests__/template.marko_0_aChange#36");
	_scope($scope0_id, {
		a,
		aChange,
		bChange,
		b,
		c,
		onC,
		onD,
		d,
		obj_aChange: obj.aChange,
		e,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2),
		"#childScope/4": _existing_scope($childScope3),
		"#childScope/6": _existing_scope($childScope4),
		"#childScope/20": _existing_scope($childScope5),
		"#childScope/26": _existing_scope($childScope6),
		"#childScope/27": _existing_scope($childScope7),
		"#childScope/28": _existing_scope($childScope8),
		"#childScope/29": _existing_scope($childScope9)
	}, "__tests__/template.marko", 0, {
		a: "1:10",
		aChange: "1:13",
		bChange: "2:10",
		b: "2:19",
		c: "3:13",
		onC: "3:25",
		onD: "4:19",
		d: "4:27",
		obj_aChange: ["obj.aChange", "9:8"],
		e: "10:13"
	});
}, 1);
