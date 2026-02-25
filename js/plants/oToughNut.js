import { oTallNut } from "./oTallNut.js";

export var oToughNut = InheritO(oTallNut, {
	EName: "oToughNut",
	CName: "Tough-nut",
	width: 83,
	height: 119,
	beAttackedPointR: 63,
	SunNum: 200,
	HP: 12000, // More health than Tall-nut (8000)
	coolTime: 30,
	PicArr: [
		"images/Card/Plants/ToughNut.png",
		"images/Plants/ToughNut/0.gif",
		"images/Plants/ToughNut/ToughNut.gif",
		"images/Plants/ToughNut/ToughNutCracked1.gif",
		"images/Plants/ToughNut/ToughNutCracked2.gif",
		"images/Plants/CherryBomb/Boom.gif" + $Random,
	],
	Tooltip: "Extremely tough wall that explodes when destroyed",
	Produce:
		'<font color="#28325A">Tough-nut is an ultra-durable wall plant. When destroyed, it explodes and damages nearby zombies.</font><p>Toughness: <font color="#CC241D">extreme</font><br>Special: <font color="#CC241D">explodes on death</font></p>',

	getHurt(e, b, a) {
		var c = this;
		var d = $(c.id).childNodes[1];

		if (!(b % 3)) {
			c.HP -= a;

			if (c.HP < 1) {
				this.Explode();
				c.Die();
			} else if (c.HP < 4000) {
				c.HurtStatus < 2 &&
					((c.HurtStatus = 2),
					(d.src = "images/Plants/ToughNut/ToughNutCracked2.gif"));
			} else if (c.HP < 8000) {
				c.HurtStatus < 1 &&
					((c.HurtStatus = 1),
					(d.src = "images/Plants/ToughNut/ToughNutCracked1.gif"));
			}
		} else {
			this.Explode();
			c.Die(1);
		}
	},

	Explode() {
		PlaySound2("cherrybomb");

		var c = this;
		var j = c.R;
		var g = j > 2 ? j - 1 : 1;
		var e = j < oS.R ? j + 1 : oS.R;
		var l = c.pixelLeft - 80;
		var k = c.pixelLeft + 160;
		var d, h;

		do {
			h = (d = oZ.getArZ(l, k, g)).length;
			while (h--) {
				d[h].getExplosion();
			}
		} while (g++ < e);

		var f = $(c.id);
		EditEle(
			f.childNodes[1],
			{
				src: c.PicArr[5] + Math.random(),
			},
			{
				width: "213px",
				height: "196px",
				left: "-50px",
				top: "-37px",
			}
		);
		oSym.addTask(120, ClearChild, [f]);
	},
});