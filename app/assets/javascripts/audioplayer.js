
  $("document").ready(myPlayer) ;

function myPlayer() {

  var actualSong = 0;

  function Song(id, name, author, mp3, ogg ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.mp3 = mp3;
    this.ogg = ogg;
    this.selected = false;
    this.element = document.createElement("LI");

    this.element.style.height = "42px";
    this.element.style.display = "block"
    this.element.textContent = (this.id + 1) + " : " + this.name + " : " + this.author }

  var song1 = new Song(1, "LOST - Exploring & Travelling Theme", "Michael Giacchino", "LOST - Exploring & Travelling Theme.mp3", "None");
  var song2 = new Song(2, "LOST - Bens Theme", "Michael Giacchino", "LOST - Bens Theme.mp3", "None");
  var song3 = new Song(3, "LOST - Charlies Theme", "Michael Giacchino", "LOST - Charlies Theme.mp3", "None");
  var song4 = new Song(4, "LOST - Desmond & Pennys Theme", "Michael Giacchino", "LOST - Desmond & Pennys Theme.mp3", "None");



    var playList = [song1, song2, song3, song4];

    var storage = {};
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
    timeline.style.backgroundColor = "none";
    timeline.style.width = "85.2%";
    timeline.style.verticalAlign = "middle";

    /* setting progressBar */
    var progressBar = document.createElement("DIV");
    progressBar.style.height = "50px";
    progressBar.style.backgroundColor = "none";
    progressBar.style.width = "100%";

    /*setting progress */
    var progress = document.createElement("DIV");
    progress.style.height = "50px";
    progress.style.backgroundColor = "#303030";
    progress.style.width = "0%";
    progress.style.zIndex = "-10";
    progress.id = "progress";
    progress.style.transition = "width linear 0.2s";
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
    songTitle.innerHTML = "LOST - Exploring & Travelling Theme";
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

    /* setting volumCtrl */
    var volumeCtrl = document.createElement("DIV");
    volumeCtrl.style.height = "130px";
    volumeCtrl.style.width = "50px";
    volumeCtrl.style.backgroundColor = "black";
    volumeCtrl.style.marginTop = "-150px";
    volumeCtrl.style.marginLeft = "-15px";
    volumeCtrl.style.display = "none";
    volumeCtrl.style.paddingTop = "20px";

    var volumeRange = document.createElement("DIV");
    volumeRange.style.position = "relative";
    volumeRange.style.boxSizing = "border-box";
    volumeRange.style.width = "2px";
    volumeRange.style.height = "110px";
    volumeRange.style.backgroundColor = "white";
    volumeRange.style.marginRight = "auto";
    volumeRange.style.marginLeft = "auto";

    var volumePusher = document.createElement("DIV");
    volumePusher.style.position = "relative";
    volumePusher.style.display = "block";
    volumePusher.style.boxSizing = "border-box";
    volumePusher.style.width = "100%";
    volumePusher.style.height = "0";
    volumePusher.style.backgroundColor = "grey";

    var volumeCursor = document.createElement("DIV");
    volumeCursor.style.display = "relative";
    volumeCursor.style.height = "16px";
    volumeCursor.style.width = "16px";
    volumeCursor.style.background = "white";
    volumeCursor.style.borderRadius = "50%";
    volumeCursor.style.marginLeft = "-7px";

    volumeRange.appendChild(volumePusher);
    volumeRange.appendChild(volumeCursor);

    volumeCtrl.appendChild(volumeRange);


    volumeBtn.appendChild(volumeCtrl);
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
    var displayPlayList = document.createElement("UL");
    displayPlayList.style.display = "block";
    displayPlayList.style.backgroundColor = "rgba(255,255,255,0.9)";
    displayPlayList.style.height = "200px";
    displayPlayList.style.width = "100%";
    displayPlayList.style.position = "fixed";
    displayPlayList.style.bottom = "50px";
    displayPlayList.style.margin = "0";
    displayPlayList.style.color = "#3a3333";

    /*setting source attributs*/
    source.src = playList[0].mp3;
    song1.selected = true;
    alert(playList[0].selected);
    source.type = "audio/mp3";

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
    $body.appendChild(displayPlayList);
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
        if (audio.buffered.end) {
          progressBar.style.backgroundColor = "#0c0c0c";
        }
        audio.play();
        iconPlay.style.display = "none";
        iconPause.style.display = "inline-block";
      }

    }

    function audioEndedReset() {
      if( audio.ended) {
        iconPause.style.display = "none";
        iconPlay.style.display = "inline-block";
        progress.style.width = '100%';
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

    /* setting volumeControl btn functions */






    function volumeClickControle(e) {

      var volumeChoice;
      var barPosition;
      var barFullHeightCalculated = getComputedStyle(volumeRange).height;
      var barFullHeight = parseInt(barFullHeightCalculated[0] + barFullHeightCalculated[1] + barFullHeightCalculated[2]);
      var y;
      var choicePercentage;

      var fullVolume = 100;



      do {

        volumeChoice = clickedAt(e).y;
        barPosition = elementPositionAt(volumeRange).y;
        y = volumeChoice - barPosition ;
        choicePercentage = Math.round(((y / barFullHeight )* 100) * 100) /100;
        /*songTitle.textContent = clickedAt(e).y;*/
        volumePusher.style.height = choicePercentage  + "%";
        console.log(choicePercentage);
        audio.volume = 1 -(choicePercentage / 100);
      }while (volumeChoice > barPosition.y && choicePercentage <= 100);
    }


    (function() { // On utilise une IIFE pour ne pas polluer l'espace global

        var storage = {}; // Contient l'objet de la div en cours de déplacement


        function init() { // La fonction d'initialisation

        function mouseDown(e) { // Initialise le drag & drop

            var s = storage;
            s.target = e.target;
            s.offsetX = e.clientX - s.target.offsetLeft;
            s.offsetY = e.clientY - s.target.offsetTop;

        }

        function mouseMove(e) { // Permet le suivi du drag & drop
            var target = storage.target;
            /*var rangeComputed = getComputedStyle(volumeRange).paddingTop;
            var range = parseInt(rangeComputed[0] + rangeComputed[1] + rangeComputed[2]);
            var heightComputed = getComputedStyle(volumeRange).height;*/
            var max = 110;
            var pad = e.clientY - storage.offsetY;
            var padPercent = Math.round(((pad * 100) / max)*100)/100;
            if (target && padPercent >= 0 && padPercent <= 100 ) {

                volumePusher.style.height = padPercent + '%';
                console.log(padPercent);
            }
        }

        volumeCtrl.addEventListener('mouseup', function() { // Termine le drag & drop
            storage = {};
        }, false);

            volumeCursor.addEventListener('mousedown', mouseDown, false);



        volumeCtrl.addEventListener('mousemove', mouseMove, false);
    }

    init(); // On initialise le code avec notre fonction toute prête.

})();





    function volumeControleShow() {
      var displayComputed = getComputedStyle(volumeCtrl).display;
      if (displayComputed == "none"){
        volumeCtrl.style.display = "block";


      }
    }

    function volumeControleHide() {
      var displayComputed = getComputedStyle(volumeCtrl).display;

      if (displayComputed == "block"){
        volumeCtrl.style.display = "none";

      }

      storage = {};
    }

    function addAllEvents(){

    playBtn.addEventListener("click", playPause , false);
    audio.addEventListener("timeupdate", update, false);
    audio.addEventListener("timeupdate", audioEndedReset, false);
    songIntel.addEventListener('click', progressControl, false);
    volumeBtn.addEventListener('mouseover', volumeControleShow, false);
    volumeBtn.addEventListener('mouseout', volumeControleHide, false);
    volumeCtrl.addEventListener('click', volumeClickControle, false);
    forwardBtn.addEventListener('click', nextSong, false);
    backwardBtn.addEventListener('click', previousSong, false);
  }

  function removeAllEvents() {
    playBtn.removeEventListener("click", playPause , false);
    audio.removeEventListener("timeupdate", update, false);
    audio.removeEventListener("timeupdate", audioEndedReset, false);
    songIntel.removeEventListener('click', progressControl, false);
    volumeBtn.removeEventListener('mouseover', volumeControleShow, false);
    volumeBtn.removeEventListener('mouseout', volumeControleHide, false);
    volumeCtrl.removeEventListener('click', volumeClickControle, false);
    forwardBtn.removeEventListener('click', nextSong, false);
    backwardBtn.removeEventListener('click', previousSong, false);
  }

  /* function to reset the selected value off all song to false */
  function playListResetSelect() {
    for (i = 0; i < playList.length; i++){
        playList[i].selected = false;
    }
  }

  /* function to now the actual selected song */

  function actualySelected() {
    for (i = 0; i < playList.length; i++){

      if (playList[i].selected == true){
        actualSong = i;
      }
    }
    return actualSong;
  }

  /* function to fill the audio with a song */
  function fillAudio(i, direction) {
    var wasPlaying = false;

    if (!audio.paused){
      wasPlaying = true;
    }else {
      wasPlaying = false;
    }

    var max = playList.length - 1;
    console.log(max);
    var next = i + 1;
    var previous = i - 1;
    if (next < (playList.length) && direction == "forward") {
      source.src = playList[next].mp3;
      songTitle.textContent = playList[next].name;
      playListResetSelect();
      playList[next].selected = true;
    } else if(next >= playList.length && direction == "forward") {
      source.src = playList[0].mp3;
      songTitle.textContent = playList[0].name;
      playListResetSelect();
      playList[0].selected = true;
    } else if (previous >= 0 && direction == "backward"){
      source.src = playList[previous].mp3;
      songTitle.textContent = playList[previous].name;
      playListResetSelect();
      playList[previous].selected = true;
    } else if (previous < 0 && direction == "backward"){
      source.src = playList[max].mp3;
      songTitle.textContent = playList[max].name;
      playListResetSelect();
      playList[max].selected = true;
    }
    audio.load();

    if (wasPlaying){
      audio.play();
    }

  }

  /* function to navigate forward in playlist  */

  function nextSong() {
    var now = actualySelected();
    fillAudio(now, "forward");
  }

  /* function to navigate backward in playList */

  function previousSong() {
    var now = actualySelected();
    fillAudio(now , "backward");
  }

  /* function to load playlist */

  function loadPlayList() {
    for (i = 0; i < playList.length; i++){
      console.log(playList[i].element.nodeName)
      displayPlayList.appendChild(playList[i].element);
    }

  }

  loadPlayList();
  addAllEvents();
}
