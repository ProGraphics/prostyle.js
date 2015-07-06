var hello = Pro.Motion.Stories.hello = Pro.Motion.Stories.hello || {};

hello.story = {
    frame: {
        padding:15,
        init: {bg: "#BADA55", corners:true}
    },
    items: [
        {
            text: "Hello",
            init: {font:50, opacity:50},
            actions: [
                {anim:5, rot:[180, -360, 540]},
                {anim:5, rot:[180, 180, 180]}
            ]
        },
        {
            text: "World",
            init: {font:20, pos:[35, 35], opacity:50},
            scripts: [
                {  action:{anim:[3,"curve less out"], pos:{x:-35}}},
                {  action:{anim:[3,"curve less in"], pos:{y:-35}}},
                {
                    actions: [
                        {delay:3, anim:[3,"elastic"], pos:[35,-35]},
                        {anim:[3,"bounce"], pos:[35,35]}
                    ]
                }
            ]
        }
    ]
};
