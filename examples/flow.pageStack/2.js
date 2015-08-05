ProStyle.Stories.stack2 = {
	canvas: { padding:7 },
	frame: {
		padding:13,
		init:{
			bg:"#BADA55",
			shadow:[0,0,1,"black",0,true],
			corners:true
		}
	},
	flow:{
		flowType:"pageStack",
		placement:{ pos:[100,-100,0], rot:[0,0,0], scale:100 },
		pageAspectRatio:4/3,
		stacks:{
			current:{ pos:[-5,-10,-10], rot:[-10,15,-10], scale:100, opacity:100 },
			future:{ pos:[-33,-45,-35], rot:[-10,15,-10], scale:100, opacity:80,
				offset:{ pos:[-10,-9,-4], rot:[0,-5,3], scale:100, opacity:80 }},
			past:{ pos:[70,70,100], rot:[0,10,-5], scale:100, opacity:0,
				offset:{ pos:[0,0,0], rot:[0,0,0], scale:100, opacity:0 }}
		},
		pages:[
			{ item:{
					text:["A 'Page Stack' with", "custom configuration."],
					init:{font:7, align:"center"},
					actions:{delay:3}
				}
			},
			{ item:{text:"2"} },
			{ item:{text:"3"} },
			{ item:{text:"4"} },
			{ item:{text:"5"} },
			{ item:{text:"6"} },
			{ item:{text:"7"} },
		]
	}
};
