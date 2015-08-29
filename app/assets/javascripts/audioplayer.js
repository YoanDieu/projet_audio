
  $("document").ready(myPlayer) ;

function myPlayer() {

    var $body = document.getElementById("body");
    var fullPlayer = document.createElement("DIV");


    /* AUDIO ITSELF */
    var audio = document.createElement("AUDIO");
    audio.preload = "auto";
    var source = document.createElement("SOURCE");

    /*setting fullPlayer style */
    fullPlayer.style.backgroundColor = "black";
    fullPlayer.style.position = "fixed";
    fullPlayer.style.display = "block";
    fullPlayer.style.width = "100%";
    fullPlayer.style.height = "50px";
    fullPlayer.style.zIndex = "500";
    fullPlayer.style.bottom = "0px";
    fullPlayer.style.verticalAlign = "middle";
    /* setting backward css and attributs */
    var backwardBtn = document.createElement("DIV");
    backwardBtn.style.width = "32px";
    backwardBtn.style.height = "100%";
    backwardBtn.style.marginLeft = "32px";
    backwardBtn.style.display = "inline-block";
    backwardBtn.style.verticalAlign = "middle";
    var iconBack = document.createElement("I");
    iconBack.className = "fa fa-step-backward";
    iconBack.style.color = "white";
    iconBack.style.marginTop = "20px";
    iconBack.style.fontSize = "13px";
    backwardBtn.appendChild(iconBack);



    /* setting playBtn css and attributs */
    var playBtn = document.createElement("DIV");
    playBtn.style.width = "32px";
    playBtn.style.height = "100%";
    playBtn.style.display = "inline-block"
    playBtn.style.verticalAlign = "middle";
    var iconPlay = document.createElement("I");
    iconPlay.className = "fa fa-play";
    iconPlay.style.color = "white";
    iconPlay.style.verticalAlign = "middle";
    iconPlay.style.marginTop = "15px";
    iconPlay.style.fontSize = "20px";
    playBtn.appendChild(iconPlay);
    var iconPause = document.createElement("I");
    iconPause.className = "fa fa-pause";
    iconPause.style.color = "white";
    iconPause.style.verticalAlign = "middle";
    iconPause.style.marginTop = "15px";
    iconPause.style.fontSize = "20px";
    iconPause.style.display = "none";
    playBtn.appendChild(iconPause);

    /* setting forward css and attributs */
    var forwardBtn = document.createElement("DIV");
    forwardBtn.style.width = "32px";
    forwardBtn.style.height = "100%";
    forwardBtn.style.marginLeft = "5px";
    forwardBtn.style.marginRight = "10px";
    forwardBtn.style.display = "inline-block";
    forwardBtn.style.verticalAlign = "middle";
    var iconForward = document.createElement("I");
    iconForward.className = "fa fa-step-forward";
    iconForward.style.color = "white";
    iconForward.style.fontSize = "13px";
    iconForward.style.marginTop = "20px";
    forwardBtn.appendChild(iconForward);



    /*setting timline basics */
    var timeline = document.createElement("DIV");
    timeline.style.position = "relative";
    timeline.style.display = "inline-block";
    timeline.style.height = "50px";
    timeline.style.backgroundColor = "grey";
    timeline.style.width = "80.2%";
    timeline.style.verticalAlign = "middle";

    /* setting progressBar */
    var progressBar = document.createElement("DIV");
    progressBar.style.height = "50px";
    progressBar.style.backgroundColor = "#0c0c0c";
    progressBar.style.width = "100%";

    /*setting progress */
    var progress = document.createElement("DIV");
    progress.style.height = "50px";
    progress.style.backgroundColor = "#303030";
    progress.style.width = "0%";
    progress.style.zIndex = "-10";
    progress.id = "progress";
    progressBar.appendChild(progress);

    /* setting imagecover css and attributs */
    var cover = document.createElement("DIV");
    cover.style.width = "50px";
    cover.style.height = "100%";
    cover.style.marginTop = "-4px";
    cover.style.position = "relative";
    cover.style.display = "inline-block";
    cover.style.verticalAlign = "middle";
    cover.style.zIndex = "510";
    var coverImg = document.createElement("IMG");
    coverImg.src = "assets/album-01.jpg";
    coverImg.style.height = "50px";
    cover.appendChild(coverImg);

    /* settings song and song length */
    var songTitle = document.createElement("P");
    songTitle.style.color = "white";
    songTitle.style.width = "47%";
    songTitle.style.marginLeft = "1%";
    songTitle.style.verticalAlign = "middle";
    songTitle.style.display = "inline-block";
    songTitle.style.fontSize = "13px";
    songTitle.innerHTML = "Aeolus - She Threw Herself Into The Sea";
    songTitle.style.zIndex = "510";
    var songLength = document.createElement("P");
    songLength.style.color = "white";
    songLength.style.width = "45%";
    songLength.style.verticalAlign = "middle";
    songLength.style.display = "inline-block";
    songLength.style.textAlign = "right";
    songLength.style.fontSize = "13px";
    songLength.innerHTML = "00:00 / 00:00";
    songLength.style.zIndex = "510";

    var songIntel = document.createElement("DIV");
    songIntel.style.position = "relative";
    songIntel.style.display = "inline-block";
    songIntel.style.height = "50px";
    songIntel.style.paddingTop = "8px";
    songIntel.style.backgroundColor = "none";
    songIntel.style.width = "100%";
    songIntel.style.verticalAlign = "middle";
    songIntel.style.marginTop = "-78px";
    songIntel.appendChild(cover);
    songIntel.appendChild(songTitle);
    songIntel.appendChild(songLength);

    /*pushing all into timeline */
    timeline.appendChild(progressBar);
    timeline.appendChild(songIntel);

    /* setting volumeBtn */
    var volumeBtn= document.createElement("DIV");
    volumeBtn.style.width = "32px";
    volumeBtn.style.height = "100%";
    volumeBtn.style.marginLeft = "20px";
    volumeBtn.style.marginRight = "10px";
    volumeBtn.style.display = "inline-block";
    volumeBtn.style.verticalAlign = "middle";
    var iconVolume = document.createElement("I");
    iconVolume.className = "fa fa-volume-up";
    iconVolume.style.color = "white";
    iconVolume.style.fontSize = "20px";
    iconVolume.style.marginTop = "15px";
    volumeBtn.appendChild(iconVolume);

    /* setting BurgerBtn */
    var burgerBtn= document.createElement("DIV");
    burgerBtn.style.width = "32px";
    burgerBtn.style.height = "100%";
    burgerBtn.style.marginLeft = "0px";
    burgerBtn.style.marginRight = "10px";
    burgerBtn.style.display = "inline-block";
    burgerBtn.style.verticalAlign = "middle";
    var iconBurger = document.createElement("I");
    iconBurger.className = "fa fa-bars";
    iconBurger.style.color = "white";
    iconBurger.style.fontSize = "20px";
    iconBurger.style.marginTop = "15px";
    burgerBtn.appendChild(iconBurger);

    /*setting source attributs*/
    source.src = "montageson.ogg";
    source.type = "audio/ogg";

    /* setting playerBtn attribut and style */



    audio.appendChild(source);
    fullPlayer.appendChild(backwardBtn);
    fullPlayer.appendChild(playBtn);
    fullPlayer.appendChild(forwardBtn);
    fullPlayer.appendChild(timeline);
    fullPlayer.appendChild(volumeBtn);
    fullPlayer.appendChild(burgerBtn);

    fullPlayer.appendChild(audio);


    /* pushing all into body */
    $body.appendChild(fullPlayer);



    /* function to convert seconds in hh:mm:ss format */
    function formatTime(time) {
        var hours = Math.floor(time / 3600);
        var mins  = Math.floor((time % 3600) / 60);
        var secs  = Math.floor(time % 60);

        if (secs < 10) {
            secs = "0" + secs;
        }

        if (hours) {
            if (mins < 10) {
                mins = "0" + mins;

            }
            return hours + ":" + mins + ":" + secs; // hh:mm:ss

        } else {
            return mins + ":" + secs; // mm:ss
        }
    }

    /* play and pause toggle function */

    function playPause(){

      if (!audio.paused){
        audio.pause();
        iconPause.style.display = "none";
        iconPlay.style.display = "inline-block";
      } else {
        audio.play();
        iconPlay.style.display = "none";
        iconPause.style.display = "inline-block";
      }

    }

    function audioEndedReset() {
      if( audio.ended) {
        iconPause.style.display = "none";
        iconPlay.style.display = "inline-block";
        progress.style.width = '0%';
        songLength.textContent = "00:00 / " + formatTime(audio.duration);
      }
    }

    /* timeline progression update */
    function update() {


       var duration =   audio.duration;    // Durée totale
       var time     = audio.currentTime; // Temps écoulé
       var fraction = time / duration;
       var percent  = fraction * 100;
       progress.style.width = percent + '%';
        songLength.textContent = formatTime(time) + " / " + formatTime(duration);
    }

    /* function to get position of the mouse */
    function clickedAt(e) {

      return {
        x: e.clientX,
        y: e.clientY
      }

    }

    /* function to get an element position */
    function elementPositionAt(element) {
      var top = 0;
      var left = 0;

      do  {
        top += element.offsetTop;
        left += element.offsetLeft;
      } while (element = element.offsetParent );

      return {
        x: left,
        y: top
      }

    }

    /* function to control progressBar */

    function progressControl(e) {

      if (audio.currentTime > 0){
      var durationChoice = clickedAt(e);

      var barPosition = elementPositionAt(progressBar);
      var barFullWidth = progressBar.offsetWidth;


      var x = durationChoice.x - barPosition.x ;

      var choicePercentage = (x / barFullWidth )* 100;

      var songDuration = audio.duration;

      audio.currentTime = (songDuration * choicePercentage) / 100;
      }
    }


    playBtn.addEventListener("click", playPause , false);
    audio.addEventListener("timeupdate", update, false);
    audio.addEventListener("timeupdate", audioEndedReset, false);
    songIntel.addEventListener('click', progressControl, false);



}
