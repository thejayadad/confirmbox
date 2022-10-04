

function showBox(){
    let text;
    if(confirm("By pressing ok you are confirming")){
        text = "Thanks for confirming"
        let btn = document.querySelector("button")
        btn.style.display = "none";
    } else {
        text = "Stops for stoping by"
    }

    document.getElementById("demo").innerText = text;
}