(function() {
     function SongPlayer() {
          var SongPlayer = {};

          var currentSong = null;
          var currentBuzzObject = null;

          SongPlayer.play = function(song) {
            if (currentSong !== song) {


                  currentBuzzObject.play();
                  song.playing = true;
                  setSong(song);
       } else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
             song.playing = true;
         }
     }
     };
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
 };

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

          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
