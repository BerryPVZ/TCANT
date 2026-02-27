export var oComingSoon = InheritO(CPlants, {
	EName: "oComingSoon",
	CName: "Coming-Soon",
	width: 65,
	height: 73,
	beAttackedPointR: 45,
	SunNum: 50,
	coolTime: 15.5,
	HP: 4e3,
	PicArr: [
		"images/Card/Plants/ComingSoon.png",
		"images/Plants/ComingSoon/0.gif",
	],
	Tooltip: "Coming soon..",
	Produce:
		'<font color="#28325A">???"',
	CanGrow(c, b, f) {
		var a = b + "_" + f;
		var d = c[1];
		var e = oS.ArP;
		return e
			? oGd.$LF[b] === 1
				? f > 0 && f < e.ArC[1] && !(oGd.$Crater[a] || oGd.$Tombstones[a] || d)
				: c[0] && !d
			: d && d.EName === "oWallNut"
				? 1
				: oGd.$LF[b] === 1
					? !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$Tombstones[a] || d)
					: c[0] && !d;
	},
	InitTrigger() {},
	HurtStatus: 0,
	getHurt(e, b, a) {
		var c = this;
		var d = $(c.id).childNodes[1];
		!(b % 3)
			? (c.HP -= a) < 1
				? c.Die()
				: c.HP < 1334
					? c.HurtStatus < 2 && ((c.HurtStatus = 2), (d.src = "images/Plants/WallNut/Wallnut_cracked2.webp"))
					: c.HP < 2667 && c.HurtStatus < 1 && ((c.HurtStatus = 1), (d.src = "images/Plants/WallNut/Wallnut_cracked1.webp"))
			: c.Die(1);
	},
});
