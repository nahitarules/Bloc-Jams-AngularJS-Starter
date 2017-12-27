(function() {
<<<<<<< HEAD
     function SongPlayer() {
          var SongPlayer = {};

          var currentSong = null;
          var currentBuzzObject = null;
=======
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
          var currentAlbum = Fixtures.getAlbum();
          var currentBuzzObject = null;

>>>>>>> services3


          var setSong = function(song) {
              if (currentBuzzObject) {
                  currentBuzzObject.stop();
<<<<<<< HEAD
                  currentSong.playing = null;
=======
                  SongPlayer.currentSong.playing = null;
>>>>>>> services3
              }

              currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true
              });

<<<<<<< HEAD
              currentSong = song;
=======
              SongPlayer.currentSong = song;
>>>>>>> services3
           };

           var playSong = function(song){
             currentBuzzObject.play();
             song.playing = true;
           };

<<<<<<< HEAD
          SongPlayer.play = function(song) {
            if (currentSong !== song) {
                   setSong(song);
                   playSong(song);

                 } else if (currentSong === song) {
=======
           var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
           };

           SongPlayer.currentSong = null;

          SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                   setSong(song);
                   playSong(song);

                 } else if (SongPlayer.currentSong === song) {
>>>>>>> services3
                   if (currentBuzzObject.isPaused()) {
                       playSong(song);
                     }
                   }
               };

               SongPlayer.pause = function(song) {
<<<<<<< HEAD
                 currentBuzzObject.pause();
                 song.playing = false;
 };
=======
                 song = song || SongPlayer.currentSong;
                 currentBuzzObject.pause();
                 song.playing = false;
               };

               SongPlayer.previous = function() {
                 var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                 currentSongIndex--;

                 if (currentSongIndex < 0) {
                   currentBuzzObject.stop();
                   SongPlayer.currentSong.playing = null;
                 } else {
                      var song = currentAlbum.songs[currentSongIndex];
                      setSong(song);
                      playSong(song);
                 }
               };
>>>>>>> services3

          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
