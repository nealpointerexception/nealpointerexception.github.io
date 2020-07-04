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
                            color:['#868686', '#ffffff', '#cc1ba9', '#5f00e3'],
                            connectParticles:
                                true
                        }
                    }, {
                        breakpoint:
                            425
                        ,
                        options: {
                            color:['#868686', '#ffffff', '#cc1ba9', '#5f00e3'],
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
                            color:['#868686', '#ffffff', '#cc1ba9', '#5f00e3'],
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

let granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'granim',
    opacity: [1, 1],
    states: {
        "default-state": {
            gradients: [
                ['#0215fd', '#ff0900'],
                ['#ee00ff', '#5b33f6'],
            ]
        }
    }
});
let href = "404"
function go_to(){
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = href;

    }, 2100);
}
function runAboutAnim(href_go){
    href = href_go;
    let tl = anime.timeline({
        duration: 3000,
    });
    tl
        .add({
            targets: ['#page-title'],
            opacity: [1, 0],
            duration: 500
        })
        .add({
            targets: '#nav',
            height: 400,
            duration: 900,
        })
        .add({
            targets: '#can',
            opacity: 0,
            duration: 1900,
            offset: -400
        })
        .add({
            targets: '#logo',
            scale: 0.8,
            translateY: '+=30',
            duration: 900,
            offset: -100

        })
        .add({
            targets: ['#navb', '#icons'],
            duration: 900,
            offset: -100,
            translateY: -50,

        })
        //document.getElementById('logo').style.scale = 0.8;

    tl.finished.then(go_to);


}
