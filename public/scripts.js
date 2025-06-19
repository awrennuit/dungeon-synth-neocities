const $navToggle = document.querySelector('.nav-toggle');
const $mainNavigation = document.querySelector('.main-navigation');
const $sectionImgList = document.querySelectorAll('.with-img img');

function toggleNavigation() {
  if ($mainNavigation.classList.contains('main-navigation--visible')) {
    $navToggle.setAttribute('aria-expanded', 'false');
    $mainNavigation.classList.remove('main-navigation--visible');
  } else {
    $navToggle.setAttribute('aria-expanded', 'true');
    $mainNavigation.classList.add('main-navigation--visible');
  }
}

$sectionImgList.forEach(($img) => {
  $img.addEventListener('click', function () {
    if ($img.classList.contains('full-page')) {
      $img.classList.remove('full-page');
    } else {
      $img.classList.add('full-page');
    }
  });
});

// Database.html
const $allArtistItems = document.querySelectorAll('.artist-item');

function showArtists(type) {
  if (type) {
    $allArtistItems.forEach(function ($el) {
      const typeAttr = $el.getAttribute('type');
      const formattedTypesAttr = typeAttr
        .replace(/[\[\]'"]/g, '')
        .split(',')
        .map((s) => s.trim());

      if (formattedTypesAttr.includes(type)) {
        $el.style.display = 'list-item';
      } else {
        $el.style.display = 'none';
      }
    });

    const $activeBtn = document.querySelector(
      `.filter-wrapper button[type="${type}"]`
    );
    const $inactiveBtnList = document.querySelectorAll(
      `.filter-wrapper button:not([type="${type}"])`
    );

    $activeBtn.classList.add('active');

    $inactiveBtnList.forEach(function ($el) {
      $el.classList.remove('active');
    });
  } else {
    const $activeBtn = document.querySelector(
      '.filter-wrapper button[type="all"]'
    );
    const $inactiveBtnList = document.querySelectorAll(
      '.filter-wrapper button:not([type="all"])'
    );

    $allArtistItems.forEach(function ($el) {
      $el.style.display = 'list-item';
    });

    $activeBtn.classList.add('active');

    $inactiveBtnList.forEach(function ($el) {
      $el.classList.remove('active');
    });
  }
}
// end Database.html
