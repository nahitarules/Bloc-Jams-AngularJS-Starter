(function() {
     function SongPlayer(Fixtures) {

        /**
        * @desc an empty songPlayer object
        * @type {Object}
        */

        var currentAlbum = Fixtures.getAlbum();

          /**
          * @desc Buzz object audio file
          * @type {Object}
          */

        var currentBuzzObject = null;

          /**
          * @function playSong
          * @desc Starts playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */

        var playSong = function(song){
             currentBuzzObject.play();
             SongPlayer.song.playing = true;
           }
           var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
 };

        var stopSong = function(song){
          currentBuzzObject.stop();
          SongPlayer.song.playing = null;
        };
           /**
           * @desc holds the current song publicly
           * @type {Object}
           */

        SongPlayer.currentSong = null;

           /**
           * @function play
           * @desc Play current or new song
           * @param {Object} song
           */
        SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
              setSong(song);
              playSong(song);


          } else if (SongPlayer.currentSong === song) {
          if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
     }
     };
     /**
      * @function pause
      * @desc Pause current song
      * @param {Object} song
      */
      SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
 };
      SongPlayer.previous = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex--;

        if (currentSongIndex < 0) {
         stopSong();
     } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
};

      SongPlayer.next = function() {
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;

        if (currentSongIndex > currentSongIndex.length) {
          stopSong();
        } else {
          var song = currentAlbum.songs[currentSongIndex];
          setSong(song);
          playSong(song);
      }
};


          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();

      /**
      * @function setSong
      * @desc Stops currently playing song and loads new audio file as currentBuzzObject
      * @param {Object} song
      */

      var setSong = function(song) {
        if (currentBuzzObject) {
          currentBuzzObject.stop();
          currentSong.playing = null;
    }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });

    currentSong = song;
 };
