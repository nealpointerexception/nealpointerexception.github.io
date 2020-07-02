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
            '#fafafa'
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
                        '#fafafa'
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
