var lines = Pro.Motion.Stories.lines = Pro.Motion.Stories.lines || {};

lines.story = {
    item:{
        setup:{
            text:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.",
                "Quod quidem iam fit etiam in Academia.",
                "",
                "Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum.",
                "Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare?",
                "Nobis aliter videtur, recte secusne, postea; Illud dico, ea, quae dicat, praeclare inter se cohaerere.",
                "An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?",
                "Sed vos squalidius, illorum vides quam niteat oratio.",
                "",
                "Re mihi non aeque satisfacit, et quidem locis pluribus.",
                "Sed quia studebat laudi et dignitati, multum in virtute processerat.",
                "Sunt enim prima elementa naturae, quibus auctis vÃƒÂ­rtutis quasi germen efficitur.",
                "",
                "Sed mehercule pergrata mihi oratio tua.",
                "Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Quodsi ipsam honestatem undique pertectam atque absolutam.",
                "Compensabatur, inquit, cum summis doloribus laetitia."]
        },
        init:{font:5, color:"#A52A2A", width:90, anchor:[0, -50], pos:[0,-20]},
        action:{anim:{dur:35, ease:"linear"}, pos:{y:-340}},
        lineInit:{pos:[0,100], padding:{top:5}, opacity:0},
        lineAction:{anim:{dur:1, stagger:1}, pos:false, opacity:100}
    }
};
