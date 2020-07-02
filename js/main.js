window.onload
    = function () {
        Particles.init
            ({

                // normal options
                selector:'.background',
                maxParticles:100,
                connectParticles:true,
                color:['#868686', '#ffffff', '#cc1ba9', '#5f00e3'],
                sizeVariations: 5,

                // options for breakpoints
                responsive: [
                    {
                        breakpoint:
                            768
                        ,
                        options: {
                            maxParticles:
                                50
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
                                25
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
                                10

                            // disables particles.js
                        }
                    }
                ]
            });
    };
    $(document).ready(function(){
        $('.js-tilt').tilt({
            // glare: true,
            // maxGlare: 1,
            scale: 1.03,
        })
      });
