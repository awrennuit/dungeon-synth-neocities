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
