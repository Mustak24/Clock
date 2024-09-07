
const main = document.getElementById('main')

for(let i=0; i<12; i++){

    main.innerHTML += `
        <span style="rotate: ${45 + i*30}deg;">
            <p style="transform: rotateZ(${-(45 + i*30)}deg);">${12+i>12 ? i+0: 12}</p>
        </span>
    `
}
main.innerHTML += `
   <div id="sec" class="center">
            <div class="sec"></div>
        </div>
        <div id="min" class="center">
            <div class="min"></div>
        </div>
        <div id="hr" class="center">
            <div class="hr"></div>
        </div> 
`

//60, 3600, 43200
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");
    var hr = document.getElementById("hr");

    function round(){
        let ms = new Date().getMilliseconds()
        let s = new Date().getSeconds();
        let m = new Date().getMinutes();
        let h = new Date().getHours();
        sec.style.rotate = `${6*s + 0.006*ms - 90}deg`
        min.style.rotate = `${6*m + 0.1*s - 90}deg`;
        console.log(min.style.rotate)

        hr.style.rotate = `${30*(h-12)-90 + 0.1*m}deg`
    }

    setInterval(round,1);
