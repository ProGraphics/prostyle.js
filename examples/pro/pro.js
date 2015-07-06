var logo = Pro.Motion.Stories.logo = Pro.Motion.Stories.logo || {};

logo.story = {
    item: {
        itemType:"image",
        setup:{src:"pro-1000x829.png", width:90},
        init:{opacity:3, rot:-10},
        action: {
            anim:{dur:4, yoyo:true, repeat:1, ease:"sine inout"},
            rotation:10
        }
    }
};