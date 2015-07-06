var stack1 = Pro.Motion.Stories.stack1 = Pro.Motion.Stories.stack1 || {};

stack1.story = {
	canvas: { padding:7 },
	frame: {
		padding:13,
		init:{
			bg:"#BADA55",
			shadow:[0,0,1,"black",0,true],
			corners:true
		}
	},
	flow: {
		flowType:"pageStack",
		placement:{pos:100},
		pages:[
			{ item:{
					text:"This is a seven page 'Page Stack' using the default configuration.",
					init:{font:7, width:90, align:"center"},
					action:{delay:3}
				}
			},
			{ item:{text:"2"} },
			{ item:{text:"3"} },
			{ item:{text:"4"} },
			{ item:{text:"5"} },
			{ item:{text:"6"} },
			{ item:{text:"7"} }
		]
	}
};
