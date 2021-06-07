var dict = {
    0: {
        "icon": "album"
    },
    1: {
        "icon": "movie"
    }
}
var btn = false;
const toAudio = (e) => {
    if(btn){
        btn = !btn;
        document.querySelector(".helloicon").classList.toggle("BOXZONE");
        document.querySelector(".helloicon").innerHTML = dict[0]["icon"];
        document.querySelector(".hb.dark-btn").classList.remove("dark-btn");
        //e.target.classList.toggle("dark-btn");
        e.classList.add("dark-btn");
    }
}

const toVideo = (e) => {
    if(!btn){
        btn = !btn;
        document.querySelector(".helloicon").classList.toggle("BOXZONE");
        document.querySelector(".helloicon").innerHTML = dict[1]["icon"];
        document.querySelector(".hb.dark-btn").classList.remove("dark-btn");
        e.classList.add("dark-btn");
    }
}

const download = (e) => {
    if(document.querySelector("input.hellYa").value){
        var url = document.querySelector("input.hellYa").value;
        document.querySelector("input.hellYa").value = "";
        var state = btn ? "/vd" : "/ad";
        window.location.href = `http://localhost:4000${state}?URL=${url}`;
    }
}

