window.onload
    = function () {
    Particles.init
    ({

// normal options
        selector:
            '.background'
        ,
        maxParticles:
            100
        ,
        connectParticles:
            true,
        color:
            '#868686'
        ,
// options for breakpoints
        responsive: [
            {
                breakpoint:
                    768
                ,
                options: {
                    maxParticles:
                        100
                    ,
                    color:
                        '#999999'
                    ,
                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    425
                ,
                options: {
                    maxParticles:
                        100
                    ,
                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    320
                ,
                options: {
                    maxParticles:
                        0

// disables particles.js
                }
            }
        ]
    });
};
