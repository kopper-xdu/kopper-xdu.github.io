document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterPublications(category);
            setActiveButton(button);
        });
    });

    function filterPublications(category) {
        publications.forEach(publication => {
            if (category === 'all' || publication.getAttribute('data-category') === category) {
                publication.style.display = 'flex';
            } else {
                publication.style.display = 'none';
            }
        });
    }

    function setActiveButton(activeButton) {
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});

function pxToRem(px) {
    // 获取根元素的字体大小
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // 计算 px 转换为 rem 的值
    return px / rootFontSize;
}

function remToPx(rem) {
    // 获取根元素的字体大小
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // 计算 rem 到 px 的转换
    return rem * rootFontSize;
}

function adjustNavbarMargin() {
    const viewportWidth = screen.availWidth;
    const newWidth = document.body.clientWidth;
    const widthReduction = viewportWidth - newWidth;

    const marginAdjustment = widthReduction / 2; // 每边减少的 margin 值

    const initMargin = remToPx(11);
    const navbar = document.querySelector('.sub-1');

    if (initMargin - marginAdjustment >= 0) {
        navbar.style.marginLeft = `${initMargin - marginAdjustment}px`;
        navbar.style.marginRight = `${initMargin - marginAdjustment}px`;
    }
    else {
        navbar.style.marginLeft = `0px`;
        navbar.style.marginRight = `0px`;
    }

    
    const initMarginLeft = remToPx(16);
    const initMarginRight = remToPx(13);
    const body_1 = document.querySelector('.container-1 .body-1');
    if (initMarginLeft - marginAdjustment >= 0) {
        body_1.style.marginLeft = `${initMarginLeft - marginAdjustment}px`;
        if (initMarginRight - marginAdjustment < 0) {
            body_1.style.marginRight = `0px`;
        }
        else {
            body_1.style.marginRight = `${initMarginRight - marginAdjustment}px`;
        }
    }
    else {
        body_1.style.marginLeft = `0px`;
        body_1.style.marginRight = `0px`;
    }
    if (initMarginRight - marginAdjustment < 0) {
        body_1.style.marginRight == '0px';
    }
    

    const initMargin3 = remToPx(14);
    const body_2 = document.querySelector('.container-2 .body-2');
    if (initMargin3 - marginAdjustment >= 0) {
        body_2.style.marginLeft = `${initMargin3 - marginAdjustment}px`;
        body_2.style.marginRight = `${initMargin3 - marginAdjustment}px`;
    }
    else {
        body_2.style.marginLeft = `0px`;
        body_2.style.marginRight = `0px`;
    }

    const initMarginLeft4 = remToPx(14);
    const initMarginRight4 = remToPx(12.5);
    const body_3 = document.querySelector('.container-3 .body-3');
    if (initMarginLeft4 - marginAdjustment >= 0) {
        body_3.style.marginLeft = `${initMarginLeft4 - marginAdjustment}px`;
        // body_3.style.marginRight = `${initMarginRight4 - marginAdjustment}px`;
        if (initMarginRight4 - marginAdjustment < 0) {
            body_3.style.marginRight = `0px`;
        }
        else {
            body_3.style.marginRight = `${initMarginRight4 - marginAdjustment}px`;
        }
    }
    else {
        body_3.style.marginLeft = `0px`;
        body_3.style.marginRight = `0px`;
    }

    const initMargin5 = remToPx(14);
    const body_4 = document.querySelector('.container-4 .body-4');
    if (initMargin5 - marginAdjustment >= 0) {
        body_4.style.marginLeft = `${initMargin5 - marginAdjustment}px`;
        body_4.style.marginRight = `${initMargin5 - marginAdjustment}px`;
    }
    else {
        body_4.style.marginLeft = `0px`;
        body_4.style.marginRight = `0px`;
    }

    const initMargin6 = remToPx(14);
    const body_5 = document.querySelector('.container-5 .body-5');
    if (initMargin6 - marginAdjustment >= 0) {
        body_5.style.marginLeft = `${initMargin6 - marginAdjustment}px`;
        body_5.style.marginRight = `${initMargin6 - marginAdjustment}px`;
    }
    else {
        body_5.style.marginLeft = `0px`;
        body_5.style.marginRight = `0px`;
    }
}


window.addEventListener('load', adjustNavbarMargin);
window.addEventListener('resize', adjustNavbarMargin);


document.querySelector('.sub-2-left').addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    // dropdownMenu.style.display = dropdownMenu.style.display == 'block' ? 'none' : 'block';
    dropdownMenu.style.height = dropdownMenu.style.height == '200px' ? '0' : '200px';
});

function scrollToView (id) {
    document.getElementById(id).scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
    })
 }

 function toggleDiv1Visibility() {
    var sub_2 = document.querySelector('.sub-2');
    var dropdown_menu = document.querySelector('.dropdown-menu');
    var style = window.getComputedStyle(sub_2);
    
    // console.log(style.display)
    if (style.display == 'none')
        dropdown_menu.style.height = '0px';
  }

window.addEventListener('resize', toggleDiv1Visibility);