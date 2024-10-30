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




document.addEventListener('DOMContentLoaded', function() {
  // Home Navigation click
  homNavM.addEventListener('click', function() {


    // Toggle icons
    if (homeGrayM) homeGrayM.style.display = 'none';
    if (homeBlueM) homeBlueM.style.display = 'block';
    if (profileBlueM) profileBlueM.style.display = 'none';
    if (profileGrayM) profileGrayM.style.display = 'block';
    if (notiGrayM) notiGrayM.style.display = 'block';
    if (notiBlueM) notiBlueM.style.display = 'none';
    if (chatBlueM) chatBlueM.style.display = 'none';
    if (chatGrayM) chatGrayM.style.display = 'block';

    // Change border style
    if (navMenuImg) navMenuImg.style.border = '2px solid #808080';

    // Display and hide containers
    const mobileNav = document.querySelector('.mobail-nav');
    const menuPageContainer = document.querySelector('.menu-page-container');
  //  const mUnderline = document.querySelector('.mUnderline');
    const friendRequestPage = document.querySelector('.friend-request-page');
    
    if (mobileNav) mobileNav.style.marginTop = '0';
    if (menuPageContainer) menuPageContainer.style.display = 'none';
    if (friendRequestPage) friendRequestPage.style.display = 'none';
    if (document.querySelector('.main-content')) document.querySelector('.main-content').style.display = 'block';
    if (document.querySelector('.profile-page-container')) document.querySelector('.profile-page-container').style.display = 'none';
  });

  // Profile Navigation click
  profileNavM.addEventListener('click', function() {
 //   tapSound.play(); // Play tap sound
    if (profileGrayM) profileGrayM.style.display = 'none';
    if (profileBlueM) profileBlueM.style.display = 'block';
    if (homeBlueM) homeBlueM.style.display = 'none';
    if (homeGrayM) homeGrayM.style.display = 'block';
    if (notiGrayM) notiGrayM.style.display = 'block';
    if (notiBlueM) notiBlueM.style.display = 'none';
    if (chatBlueM) chatBlueM.style.display = 'none';
    if (chatGrayM) chatGrayM.style.display = 'block';
    if (navMenuImg) navMenuImg.style.border = '2px solid #808080';

    if (document.querySelector('.main-container')) document.querySelector('.main-container').style.display = 'none';
    if (document.querySelector('.mobail-nav')) document.querySelector('.mobail-nav').style.marginTop = '-3rem';
    if (document.querySelector('.menu-page-container')) document.querySelector('.menu-page-container').style.display = 'none';
    if (document.querySelector('.friend-request-page')) document.querySelector('.friend-request-page').style.display = 'block';
  });

  // Udow Navigation click
  udowNavM.addEventListener('click', function() {

    if (chatBlueM) chatBlueM.style.display = 'block';
    if (chatGrayM) chatGrayM.style.display = 'none';
    if (homeBlueM) homeBlueM.style.display = 'none';
    if (homeGrayM) homeGrayM.style.display = 'block';
    if (profileBlueM) profileBlueM.style.display = 'none';
    if (profileGrayM) profileGrayM.style.display = 'block';
    if (notiGrayM) notiGrayM.style.display = 'block';
    if (notiBlueM) notiBlueM.style.display = 'none';
    if (navMenuImg) navMenuImg.style.border = '2px solid #808080';

    if (document.querySelector('.mobail-nav')) document.querySelector('.mobail-nav').style.marginTop = '-3rem';
    
    if (document.querySelector('.menu-page-container')) document.querySelector('.menu-page-container').style.display = 'none';
    if (document.querySelector('.profile-page-container')) document.querySelector('.profile-page-container').style.display = 'block';
    if (document.querySelector('.profile-page-container')) document.querySelector('.profile-page-container').style.marginTop= '-3rem';
    if (document.querySelector('.friend-request-page')) document.querySelector('.friend-request-page').style.display = 'none';
    if (document.querySelector('.main-content')) document.querySelector('.main-content').style.display = 'none';
  });

  // Notification Navigation click
  notiNavM.addEventListener('click', function() {
 //   tapSound.play(); // Play tap sound
    if (homeBlueM) homeBlueM.style.display = 'none';
    if (homeGrayM) homeGrayM.style.display = 'block';
    if (profileBlueM) profileBlueM.style.display = 'none';
    if (profileGrayM) profileGrayM.style.display = 'block';
    if (notiGrayM) notiGrayM.style.display = 'none';
    if (notiBlueM) notiBlueM.style.display = 'block';
    if (chatBlueM) chatBlueM.style.display = 'none';
    if (chatGrayM) chatGrayM.style.display = 'block';
    if (navMenuImg) navMenuImg.style.border = '2px solid #808080';

    
    
    if (document.querySelector('.mobail-nav')) document.querySelector('.mobail-nav').style.marginTop = '-3rem';
    if (document.querySelector('.menu-page-container')) document.querySelector('.menu-page-container').style.display = 'none';

    
    if (document.querySelector('.friend-request-page')) document.querySelector('.friend-request-page').style.display = 'none';
  });

  // Menu Navigation click
  menuNavM.addEventListener('click', function() {
  //  tapSound.play(); // Play tap sound
    if (homeBlueM) homeBlueM.style.display = 'none';
    if (homeGrayM) homeGrayM.style.display = 'block';
    if (profileBlueM) profileBlueM.style.display = 'none';
    if (profileGrayM) profileGrayM.style.display = 'block';
    if (notiGrayM) notiGrayM.style.display = 'block';
    if (notiBlueM) notiBlueM.style.display = 'none';
    if (chatBlueM) chatBlueM.style.display = 'none';
    if (chatGrayM) chatGrayM.style.display = 'block';
    if (navMenuImg) navMenuImg.style.border = '2px solid var(--main-color)';

    if (document.querySelector('.menu-page-container')) document.querySelector('.menu-page-container').style.display = 'block';
    if (document.querySelector('.main-container')) document.querySelector('.main-container').style.display = 'none';

    if (document.querySelector('.mobail-nav')) document.querySelector('.mobail-nav').style.marginTop = '-3rem';
    if (document.querySelector('.profile-page-container')) document.querySelector('.profile-page-container').style.display = 'none';
    if (document.querySelector('.friend-request-page')) document.querySelector('.friend-request-page').style.display = 'none';
  });
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
    document.getElementById('homeGrayM').src = 'home-lite.png'; // Update homeGrayM for dark mode 
    document.getElementById('profileGrayM').src = 'friends-lite.png';
    document.getElementById('chatGrayM').src = 'profile-lite.png';
    document.getElementById('notiGrayM').src = 'noti-lite.png';
    document.getElementById('appLogo').src = 'logo-lite.png';
    document.getElementById('searchImgIcon').src = 'search-lite.png';
    document.getElementById('udowImg').src = 'udow-lite.png';
  } else {
    document.getElementById('homeGray').src = 'home.png';
    document.getElementById('profileGray').src = 'profile.png';
    document.getElementById('notiGray').src = 'video.png';
    document.getElementById('notiLight').src = 'noti-dark.png';
    document.getElementById('homeGrayM').src = 'home.png';
    document.getElementById('profileGrayM').src = 'friends.png';
    document.getElementById('chatGrayM').src = 'profile.png';
    document.getElementById('notiGrayM').src = 'notification.png';
    document.getElementById('appLogo').src = 'logo-blue.png';
    document.getElementById('searchImgIcon').src = 'search.png';
    document.getElementById('udowImg').src = 'udow.png';
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
