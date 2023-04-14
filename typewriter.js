var j = 0;
var txt1 = "How Can I Help?";
var txt2 = "How Can I Hurt?";
var speed = 100; /* The speed/duration of the effect in milliseconds */
function articleIntro() {
    if (j < txt1.length) {
        document.getElementById("intro-title").innerHTML += txt1.charAt(j);
      j++;
      setTimeout(articleIntro, speed);
    }
    else{
        setTimeout(deleteIntro, 1000);
    }
  }
  
  function deleteIntro(){
    if(j >= 0){

        document.getElementById("intro-title").innerHTML = txt1.substring(0, j);
        j--;
        setTimeout(deleteIntro, speed);
    }
    else{
        setTimeout(articleIntro2, speed);
    }
  }

  function articleIntro2() {
    if (j < txt2.length) {
        document.getElementById("intro-title").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(articleIntro2, speed);
    }
  }