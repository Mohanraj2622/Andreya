document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}
  fetch("https://script.google.com/macros/s/AKfycbwRTuXI4PMjGI9lIqwK4Pih00i0kHsLw2pudIFLs13ESrXbfFGjIpFWP3qn8qCkiLbI8A/exec")
    .then(response => response.text())
    .then(count => {
      document.getElementById("visit-count").textContent = count;
    })
    .catch(error => console.error("Error fetching visit count:", error));

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "En-Jeevan",
    artist: "G.V.Prakash",
    url: "En-Jeevan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aagasam-MassTamilan",
    artist: "G.V.Prakash",
    url: "Aagasam-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbe Anbe",
    artist: "G.V.Prakash",
    url: "Anbe Anbe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anicham-Poovazhagi",
    artist: "G.V.Prakash",
    url: "Anicham-Poovazhagi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Appadi Podu",
    artist: "G.V.Prakash",
    url: "Appadi Podu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "A-Love-For-Life",
    artist: "G.V.Prakash",
    url: "A-Love-For-Life.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Arjunar Villu",
    artist: "G.V.Prakash",
    url: "Arjunar Villu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aval Appadi Onrum",
    artist: "G.V.Prakash",
    url: "Aval Appadi Onrum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhagu-Kutty-Chellam",
    artist: "G.V.Prakash",
    url: "Azhagu-Kutty-Chellam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Badass-Bossman-MassTamilan",
    artist: "G.V.Prakash",
    url: "Badass-Bossman-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chella-Kutti",
    artist: "G.V.Prakash",
    url: "Chella-Kutti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chennai-Sentamizh-MassTamilan",
    artist: "G.V.Prakash",
    url: "Chennai-Sentamizh-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hey-Mama",
    artist: "G.V.Prakash",
    url: "Hey-Mama.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Imaye-Imaye",
    artist: "G.V.Prakash",
    url: "Imaye-Imaye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jitthu-Jiladi",
    artist: "G.V.Prakash",
    url: "Jitthu-Jiladi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaattu-Payale-MassTamilan",
    artist: "G.V.Prakash",
    url: "Kaattu-Payale-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadha-Solla-Poraen",
    artist: "G.V.Prakash",
    url: "Kadha-Solla-Poraen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chillena",
    artist: "G.V.Prakash",
    url: "Chillena.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dhrogam",
    artist: "G.V.Prakash",
    url: "Dhrogam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dont-Worry-Be-Happy",
    artist: "G.V.Prakash",
    url: "Dont-Worry-Be-Happy.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Engaum-Epothum",
    artist: "G.V.Prakash",
    url: "Engaum-Epothum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Freeya-Vudu",
    artist: "G.V.Prakash",
    url: "Freeya-Vudu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Golden-Sparrow-MassTamilan",
    artist: "G.V.Prakash",
    url: "Golden-Sparrow-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hawa-Hawa",
    artist: "G.V.Prakash",
    url: "Hawa-Hawa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hey-Baby",
    artist: "G.V.Prakash",
    url: "Hey-Baby.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Kadhal-Valarthen",
    artist: "G.V.Prakash",
    url: "Kadhal-Valarthen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalloorum-MassTamilan",
    artist: "G.V.Prakash",
    url: "Kalloorum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kan-Peasum-Varthaigal",
    artist: "G.V.Prakash",
    url: "Kan-Peasum-Varthaigal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanchi-Paanai",
    artist: "G.V.Prakash",
    url: "Kanchi-Paanai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kandha-Kara",
    artist: "G.V.Prakash",
    url: "Kandha-Kara.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannamma-Kannamma-MassTamilan",
    artist: "G.V.Prakash",
    url: "Kannamma-Kannamma-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kayilae-Aagasam-MassTamilan",
    artist: "G.V.Prakash",
    url: "Kayilae-Aagasam-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kokkarakko",
    artist: "G.V.Prakash",
    url: "Kokkarakko.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ninaithu-Ninaithu-Parthal",
    artist: "G.V.Prakash",
    url: "Ninaithu-Ninaithu-Parthal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Penne",
    artist: "G.V.Prakash",
    url: "Oh-Penne.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ore-Oru-Ooril",
    artist: "G.V.Prakash",
    url: "Ore-Oru-Ooril.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Kal",
    artist: "G.V.Prakash",
    url: "Oru-Kal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Paarvaiyil",
    artist: "G.V.Prakash",
    url: "Oru-Paarvaiyil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pudichirukku",
    artist: "G.V.Prakash",
    url: "Pudichirukku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Konji-Pesida-Venaam",
    artist: "G.V.Prakash",
    url: "Konji-Pesida-Venaam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manasellam",
    artist: "G.V.Prakash",
    url: "Manasellam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Minikki Minikki",
    artist: "G.V.Prakash",
    url: "Minikki Minikki.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Minnazhgal-Koothadam",
    artist: "G.V.Prakash",
    url: "Minnazhgal-Koothadam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naadodi-Mannan-MassTamilan",
    artist: "G.V.Prakash",
    url: "Naadodi-Mannan-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naalu-Nimisham-MassTamilan",
    artist: "G.V.Prakash",
    url: "Naalu-Nimisham-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjam-Enum",
    artist: "G.V.Prakash",
    url: "Nenjam-Enum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Netru Varai",
    artist: "G.V.Prakash",
    url: "Netru Varai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Sandalee-MassTamilan",
    artist: "G.V.Prakash",
    url: "Sandalee-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Soda-Bottle",
    artist: "G.V.Prakash",
    url: "Soda-Bottle.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Soora Thenga Addra",
    artist: "G.V.Prakash",
    url: "Soora Thenga Addra.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Tamil-Pasanga",
    artist: "G.V.Prakash",
    url: "Tamil-Pasanga.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Taxi-Taxi",
    artist: "G.V.Prakash",
    url: "Taxi-Taxi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thalapathy-Thalapathy",
    artist: "G.V.Prakash",
    url: "Thalapathy-Thalapathy.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "The-Ecstasy-of-Dance",
    artist: "G.V.Prakash",
    url: "The-Ecstasy-of-Dance.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thirunelveli-Alvada",
    artist: "G.V.Prakash",
    url: "Thirunelveli-Alvada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thotta-Power",
    artist: "G.V.Prakash",
    url: "Thotta-Power.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thottu-Thottu",
    artist: "G.V.Prakash",
    url: "Thottu-Thottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Paathi-Kadhavu",
    artist: "G.V.Prakash",
    url: "Oru-Paathi-Kadhavu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paakatha",
    artist: "G.V.Prakash",
    url: "Paakatha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Padichu-Pathen",
    artist: "G.V.Prakash",
    url: "Padichu-Pathen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Para-Para-Pattaampoochi-MassTamilan",
    artist: "G.V.Prakash",
    url: "Para-Para-Pattaampoochi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paravaye-Engu-Irukirai-MassTamilan",
    artist: "G.V.Prakash",
    url: "Paravaye-Engu-Irukirai-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pesugiren-Pesugiren",
    artist: "G.V.Prakash",
    url: "Pesugiren-Pesugiren.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pogathey-Pogathe",
    artist: "G.V.Prakash",
    url: "Pogathey-Pogathe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poi-Varavaa-MassTamilan",
    artist: "G.V.Prakash",
    url: "Poi-Varavaa-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pottadhu-Pathala",
    artist: "G.V.Prakash",
    url: "Pottadhu-Pathala.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Unakkena-Iruppen",
    artist: "G.V.Prakash",
    url: "Unakkena-Iruppen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unnale",
    artist: "G.V.Prakash",
    url: "Unnale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaar-Intha-Penthan",
    artist: "G.V.Prakash",
    url: "Yaar-Intha-Penthan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaaro-Ivan",
    artist: "G.V.Prakash",
    url: "Yaaro-Ivan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaerumayileri-MassTamilan",
    artist: "G.V.Prakash",
    url: "Yaerumayileri-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yelammaa-Yela-MassTamilan.",
    artist: "G.V.Prakash",
    url: "Yelammaa-Yela-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yendhan-Kan-Munne-MassTamilan",
    artist: "G.V.Prakash",
    url: "Yendhan-Kan-Munne-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Urugudhe-Maragudhe",
    artist: "G.V.Prakash",
    url: "Urugudhe-Maragudhe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Usurey-MassTamilan",
    artist: "G.V.Prakash",
    url: "Usurey-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaa-Vaathi",
    artist: "G.V.Prakash",
    url: "Vaa-Vaathi-(Dhanush-Reprise-Version)-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vanganna-Vanakanganna",
    artist: "G.V.Prakash",
    url: "Vanganna-Vanakanganna.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veera-Dheera-Theme-MassTamilan",
    artist: "G.V.Prakash",
    url: "Veera-Dheera-Theme-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veyilodu-Vilayadi",
    artist: "G.V.Prakash",
    url: "Veyilodu-Vilayadi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veyyon-Silli-MassTamilan",
    artist: "G.V.Prakash",
    url: "Veyyon-Silli-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vizhigalil-Oru-Vaanavil",
    artist: "G.V.Prakash",
    url: "Vizhigalil-Oru-Vaanavil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaar-Indha-Saalai-Oram",
    artist: "G.V.Prakash",
    url: "Yaar-Indha-Saalai-Oram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

    
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "parakash-cover-1.jpg",
      "parakash-cover-2.jpg",
      "parakash-cover-3.jpg",
      "prakash-cover-4.jpg",
      "parakash-cover-5.jpg"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
