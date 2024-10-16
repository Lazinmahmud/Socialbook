// profile menu click dropdown menu 
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
        dropDownSearch.style.display = 'none';
        mainMenuPage.style.display = 'block'
        menuDisplayAccessbalityBox.style.display = 'none'
    } else {
        dropdownMenu.style.display = 'none';
    }
}

// toggle search menu 
function toggleSearch() {
    const dropDownSearch = document.getElementById('dropDownSearch'); // Corrected the variable name
    const searchInp = document.querySelector('#searchInp');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropDownSearch.style.display === 'none' || dropDownSearch.style.display === '') {
        dropDownSearch.style.display = 'block';
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
        searchInp.focus();
    } else {
        dropDownSearch.style.display = 'none';
    }
}





// post image select and img display 
const fileInput = document.getElementById('fileInput');
    const selectedImage = document.getElementById('selectedImage');
    const imgSelectIcon = document.querySelector('.img-select-icon');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                selectedImage.src = e.target.result;
                selectedImage.style.display = 'block';
                imgSelectIcon.style.display = 'none'
            }
            reader.readAsDataURL(file);
        }
    });

//edit profile select img 
const profileInp = document.getElementById('profileInp');
    const profileImgSleted = document.getElementById('profileImgSleted');

    profileInp.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImgSleted.src = e.target.result;
                profileImgSleted.style.display = 'block';
                
            }
            reader.readAsDataURL(file);
        }
    });
    
//edit cover selected img 
const coverImgInp = document.getElementById('coverImgInp');
    const coverImgSelect = document.getElementById('coverImgSelect');

    coverImgInp.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                coverImgSelect.src = e.target.result;
                coverImgSelect.style.display = 'block';
                
            }
            reader.readAsDataURL(file);
        }
    });

// post create popup open 
document.getElementById("postTextarea").addEventListener('click', function(){
  
  document.querySelector('.popup-opachity').style.display = 'flex'
  document.querySelector('.mobail-nav').style.zIndex = '0'
  document.getElementById('textareaPlaceholder').focus();
});


// post create popup  close
document.querySelector('.post-create-header i ').addEventListener('click', function(){
  document.querySelector('.popup-opachity').style.display = 'none'
  document.querySelector('.mobail-nav').style.zIndex = '1'
  
  selectedImage.src = '';
  selectedImage.style.display = 'none';
  imgSelectIcon.style.display = 'block'
  textareaPlaceholder.value = ''
});

//edit profile pop up close  

document.querySelector('.edit-profile-popup-header i ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'none'
  document.querySelector('.mobail-nav').style.zIndex = '1'
});


// edit profile pop up open  
 document.querySelector('.Edit-profile-btn ').addEventListener('click', function(){
  document.querySelector('.edit-profile-popup-opachity').style.display = 'flex'
  document.querySelector('.mobail-nav').style.zIndex = '0'
});


//profile page open 

document.getElementById('profileNav').addEventListener('click', function(){
  document.querySelector('.profile-page-container').style.display = 'block'
  document.querySelector('.main-container').style.display = 'none'
  document.querySelector('.drop-down-menu').style.display = 'none'
})

//profile-page-close 
document.getElementById('homeNav').addEventListener('click', function(){
  document.querySelector('.profile-page-container').style.display = 'none'
  document.querySelector('.main-container').style.display = 'flex'
})


// nav icon click icon change 

let profileNav = document.getElementById('profileNav');
let notificationNav = document.getElementById('notificationNav');
let homeNav = document.getElementById('homeNav');

let homeGray = document.getElementById('homeGray');
let homeBlue = document.getElementById('homeBlue');
let profileGray = document.getElementById('profileGray');
let profileBlue = document.getElementById('profileBlue');
let notiBlue = document.getElementById('notiBlue');
let notiGray = document.getElementById('notiGray');
let underline = document.querySelector('.underline');

let udowNavM = document.getElementById('udowNavM');
let searchResult_profile_page = document.querySelector('.searchResult_profile_page');


profileNav.addEventListener('click', function(){
  homeGray.style.display = 'block';
  homeBlue.style.display = 'none';
  profileBlue.style.display = 'block';
  profileGray.style.display = 'none';
  notiBlue.style.display = 'none';
  notiGray.style.display = 'block';
  underline.style.marginLeft = '33%';
  underline.style.display = 'block'
  searchResult_profile_page.style.display = 'none';
});

homeNav.addEventListener('click', function(){
  homeGray.style.display = 'none';
  homeBlue.style.display = 'block';
  profileBlue.style.display = 'none';
  profileGray.style.display = 'block';
  notiBlue.style.display = 'none';
  notiGray.style.display = 'block';
  underline.style.marginLeft = '0'
  underline.style.display = 'block'
  searchResult_profile_page.style.display = 'none';
});

notificationNav.addEventListener('click', function(){
  homeBlue.style.display = 'none';
  homeGray.style.display = 'block';
  profileBlue.style.display = 'none';
  profileGray.style.display = 'block';
  notiGray.style.display = 'none';
  notiBlue.style.display = 'block';
  underline.style.marginLeft = '66%'
  underline.style.display = 'block'
  searchResult_profile_page.style.display = 'none';
});


//mobail screen nav bar icon 

let homeBlueM = document.getElementById('homeBlueM');

let homeGrayM = document.getElementById('homeGrayM');
let profileGrayM = document.getElementById('profileGrayM');
let profileBlueM = document.getElementById('profileBlueM');
let notiGrayM = document.getElementById('notiGrayM');
let notiBlueM = document.getElementById('notiBlueM');

let homNavM = document.getElementById('homNavM');
let profileNavM = document.getElementById('profileNavM');
let notiNavM = document.getElementById('notiNavM');
let menuNavM = document.getElementById('menuNavM');
let navMenuImg = document.querySelector('.nav-menu img');
let chatGrayM = document.getElementById('chatGrayM');
let chatBlueM = document.getElementById('chatBlueM');



// Create an audio object
const tapSound = new Audio('tap.mp3');

let isHomNavMSelected = true; // ফ্ল্যাগ শুরুতে true

// Home Navigation click
homNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound

  if (isHomNavMSelected) {
    // যদি homNavM সিলেক্ট থাকে
    document.querySelector('.main-container').scrollTop = 0; // স্ক্রোল টপে নিয়ে যাওয়া
    setTimeout(function() {
   //   window.location.reload(); // পেজ রিফ্রেশ
    }, 0);
  } else {
    // যদি homNavM সিলেক্ট না থাকে
    // Toggle icons
    homeGrayM.style.display = 'none';
    homeBlueM.style.display = 'block';
    profileBlueM.style.display = 'none';
    profileGrayM.style.display = 'block';
    notiGrayM.style.display = 'block';
    notiBlueM.style.display = 'none';
    chatBlueM.style.display = 'none';
    chatGrayM.style.display = 'block';

    // Change border style
    navMenuImg.style.border = '2px solid #808080';

    // Display and hide containers
    document.querySelector('.profile-page-container').style.display = 'none';
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.mobail-nav').style.marginTop = '0';
    document.querySelector('.menu-page-container').style.display = 'none';
    document.querySelector('.udow-app-page').style.display = 'none';
    // Adjust margin
    document.querySelector('.mUnderline').style.marginLeft = '0%';

    document.querySelector('.friend-request-page').style.display = 'none';
    // Add overflow-y: scroll to make the element scrollable
    document.querySelector('.main-container').style.overflowY = 'scroll';

    // Scroll to the top of the container
    document.querySelector('.main-container').scrollTop = 0;

    // Update isHomNavMSelected flag
    isHomNavMSelected = true;
  }
});

// Update isHomNavMSelected flag when other navigation items are clicked
profileNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  profileGrayM.style.display = 'none';
  profileBlueM.style.display = 'block';
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  chatBlueM.style.display = 'none';
    chatGrayM.style.display = 'block';
  navMenuImg.style.border = '2px solid #808080';
  
  
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.menu-page-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '20%';
  document.querySelector('.udow-app-page').style.display = 'none';
  document.querySelector('.friend-request-page').style.display = 'block';
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});



udowNavM.addEventListener('click', function(){
  tapSound.play(); // Play tap sound 
  document.querySelector('.mUnderline').style.marginLeft = '40%';
    chatBlueM.style.display = 'block';
    chatGrayM.style.display = 'none';
    homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  navMenuImg.style.border = '2px solid #808080';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.profile-page-container').style.display = 'none';
  document.querySelector('.menu-page-container').style.display = 'none';
  document.querySelector('.udow-app-page').style.display = 'block';
  document.querySelector('.friend-request-page').style.display = 'none';
  isHomNavMSelected = false;
});




notiNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'none';
  notiBlueM.style.display = 'block';
  chatBlueM.style.display = 'none';
    chatGrayM.style.display = 'block';
  navMenuImg.style.border = '2px solid #808080';
  
  document.querySelector('.profile-page-container').style.display = 'none';
  document.querySelector('.main-container').style.display = 'flex';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.menu-page-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '60%';
  document.querySelector('.udow-app-page').style.display = 'none';
  document.querySelector('.friend-request-page').style.display = 'none';
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});

menuNavM.addEventListener('click', function() {
  tapSound.play(); // Play tap sound
  homeBlueM.style.display = 'none';
  homeGrayM.style.display = 'block';
  profileBlueM.style.display = 'none';
  profileGrayM.style.display = 'block';
  notiGrayM.style.display = 'block';
  notiBlueM.style.display = 'none';
  chatBlueM.style.display = 'none';
    chatGrayM.style.display = 'block';
  navMenuImg.style.border = '2px solid var(--main-color)';
  document.querySelector('.menu-page-container').style.display = 'block';
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.mUnderline').style.marginLeft = '80%';
  document.querySelector('.udow-app-page').style.display = 'none';
  document.querySelector('.mobail-nav').style.marginTop = '-3rem';
  document.querySelector('.profile-page-container').style.display = 'none';
  document.querySelector('.friend-request-page').style.display = 'none';
  
  // Update isHomNavMSelected flag
  isHomNavMSelected = false;
});



//lg popup open 

let lgBtnMenu = document.querySelector('.lg-btn-menu');

lgBtnMenu.addEventListener('click', function(){
  lgPopupOpachity.style.display = 'flex'
});



// logout popup close 

let calcleBtn = document.querySelector('.calcleBtn');
let lgPopupOpachity = document.querySelector('.logout-popup-opachity');


calcleBtn.addEventListener('click', function(){
  
  setTimeout(function() {
    lgPopupOpachity.style.display = 'none'
  }, 100);
});




// img long click download option disable 
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // This prevents the right-click context menu from appearing
  });
  
  img.addEventListener('mousedown', (event) => {
    if (event.button === 2) { // Right-click button
      event.preventDefault(); // Prevent default action for right-click
    }
  });
  
  img.addEventListener('click', () => {
    // Put your click event logic here
    console.log('Image clicked!');
  });
});

/*
const likeBox = document.getElementById('likeBox');
  const reactionContainer = document.querySelector('.reaction-container');
  let holdTimer;

  // স্পর্শ ইভেন্ট শুরু হলে
  likeBox.addEventListener('touchstart', () => {
    holdTimer = setTimeout(() => {
      reactionContainer.style.visibility = 'visible';
      reactionContainer.style.opacity = '1';
      reactionContainer.style.transform = 'scale(1)';
    }, 300); // ১ সেকেন্ড
  });

  // স্পর্শ ইভেন্ট শেষ হলে
  likeBox.addEventListener('touchend', () => {
    clearTimeout(holdTimer);
  });

  // স্পর্শ বাতিল হলে
  likeBox.addEventListener('touchcancel', () => {
    clearTimeout(holdTimer);
  });
  
  
  reactionContainer.addEventListener('click', function(){
    reactionContainer.style.visibility ='hidden'
  })
*/
  
  
// profile page open mobail screen 

let postCreateProfile = document.querySelector('.post-create-profile');

postCreateProfile.addEventListener('click', function() {
  
  tapSound.play();
  
  document.querySelector('.profile-page-container').style.display = 'block';
  document.querySelector('.main-container').style.display = 'none';
  
  homeGray.style.display = 'block';
  homeBlue.style.display = 'none';
  profileBlue.style.display = 'block';
  profileGray.style.display = 'none';
  notiBlue.style.display = 'none';
  notiGray.style.display = 'block';
  underline.style.marginLeft = '33%'
});


// dark theame 
const radioButtons = document.querySelectorAll('input[name="dark-mode"]');
  const themeMetaTag = document.querySelector('meta[name="theme-color"]');

  // Function to apply the system theme
  function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
      document.body.classList.add('dark-theme');
      themeMetaTag.setAttribute('content', '#242527');
      updateIconsForDarkMode(true);
    } else {
      document.body.classList.remove('dark-theme');
      themeMetaTag.setAttribute('content', '#ffffff');
      updateIconsForDarkMode(false);
    }
  }

  // Function to update icon src based on theme
  function updateIconsForDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.getElementById('homeGray').src = 'home-lite.png';
      document.getElementById('profileGray').src = 'profile-lite.png';
      document.getElementById('notiGray').src = 'video-lite.png';
      document.getElementById('notiLight').src = 'notifi-lite.png';
    } else {
      document.getElementById('homeGray').src = 'home.png';
      document.getElementById('profileGray').src = 'profile.png';
      document.getElementById('notiGray').src = 'video.png';
      document.getElementById('notiLight').src = 'noti-dark.png';
    }
  }

  // Apply the theme based on local storage or system preference
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('dark-mode');

    if (savedTheme === 'on') {
      document.querySelector('input[value="on"]').checked = true;
      document.body.classList.add('dark-theme');
      themeMetaTag.setAttribute('content', '#242527');
      updateIconsForDarkMode(true);
    } else if (savedTheme === 'off') {
      document.querySelector('input[value="off"]').checked = true;
      document.body.classList.remove('dark-theme');
      themeMetaTag.setAttribute('content', '#ffffff');
      updateIconsForDarkMode(false);
    } else if (savedTheme === 'dim') {
      document.querySelector('input[value="dim"]').checked = true;
      document.body.classList.add('dark-dim');
      themeMetaTag.setAttribute('content', '#253442'); // Dim color
      updateIconsForDarkMode(true);
    } else if (savedTheme === 'auto') {
      document.querySelector('input[value="auto"]').checked = true;
      applySystemTheme();
    }
  }

  // Event listener for radio button changes
  radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
      localStorage.setItem('dark-mode', this.value); // Save theme to local storage

      if (this.value === 'on') {
        document.body.classList.remove('dark-dim');
        document.body.classList.add('dark-theme');
        themeMetaTag.setAttribute('content', '#242527');
        updateIconsForDarkMode(true);
      } else if (this.value === 'off') {
        document.body.classList.remove('dark-theme');
        document.body.classList.remove('dark-dim');
        themeMetaTag.setAttribute('content', '#ffffff');
        updateIconsForDarkMode(false);
      } else if (this.value === 'dim') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('dark-dim');
        themeMetaTag.setAttribute('content', '#253442'); // Dim color
        updateIconsForDarkMode(true);
      } else if (this.value === 'auto') {
        applySystemTheme();
      }
    });
  });

  // Listen for system theme changes and apply them dynamically
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

  // Apply saved theme on page load
  applySavedTheme();
  
  

const darkModePage = document.querySelector('.darkModePage');
const menuDisplayAccessbalityBox = document.querySelector('.menuDisplayAccessbalityBox');
const mainMenuPage = document.querySelector('.mainMenuPage');
const menuBack = document.querySelector('.menuBack');


// dark mode page on 
darkModePage.addEventListener('click', function(){
  mainMenuPage.style.display = 'none'
  menuDisplayAccessbalityBox.style.display = 'block'
  menuDisplayAccessbalityBox.style.marginLeft = '0'
});

// dark mode page off 
menuBack.addEventListener('click', function(){
  mainMenuPage.style.display = 'block'
  menuDisplayAccessbalityBox.style.display = 'none'
  menuDisplayAccessbalityBox.style.marginLeft = '110%'
});