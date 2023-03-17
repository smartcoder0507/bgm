for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
    
        var buttonInnerHTML=this.innerHTML;
        switch (buttonInnerHTML) {
            case "ntr30":
                var audio1 = new Audio("sounds/NTR30.mp3");
                audio1.play();
            break;
            case "saaho":
                var audio2 = new Audio("sounds/saaho.mp3");
                audio2.play();
            break;
            case "pushpa":
                var audio3 = new Audio("sounds/pushpa.mp3");
                audio3.play();
            break;
            case "sir":
                var audio4 = new Audio("sounds/sir.mp3");
                audio4.play();
            break;
            case "master":
                var audio5= new Audio("sounds/master.mp3");
                audio5.play();
            break; 
            case "svp":
                var audio6= new Audio("sounds/svp.mp3");
                audio6.play();
            break;
        default:console.log();
    }
    });
}