var stack3 = ProStyle.Stories.stack3 = ProStyle.Stories.stack3 || {};

stack3.story = {
	canvas:{ init:{bg:"#BADA55", corners:true} },
	frame:{ padding:15 },
	flow:{
		flowType:"pageStack",
		placement:{ pos:[-100,-100,0]},
		pageAspectRatio:4/3,
		stacks:{
			current:{ scale:90},
			future:{ pos:[60,-75,-10], scale:40, opacity:80,
				offset:{ pos:[-45,0,0], opacity:80 }},
			past:{ pos:[-60,75,-10], scale:40,
				offset:{ pos:[45,0,0], opacity:80 }}
		},
		pages:[
			{ item:{
					text:["A 'Page Stack' with", "custom configuration."],
					init:{font:7, align:"center"}
				}
			},
			{ item:{text:"2"} },
			{ item:{text:"3"} },
			{ item:{text:"4"} },
			{ item:{text:"5"} },
			{ item:{text:"6"} },
			{ item:{text:"6"} }
		]
	}
};
