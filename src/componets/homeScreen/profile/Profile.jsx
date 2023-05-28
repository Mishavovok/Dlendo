import React from 'react';
import user from '/src/assets/user.png';
import payment from '/src/assets/pending.png';
import funded from '/src/assets/funded.png';
import pending from '/src/assets/pending.png';
import './profile.css';
function Profile() {
  return (
    <section className="profile">
      <div className="profile__options">
        <span className="profile__options-img">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.90119 10.685L2.88519 11.669H7.01619L8.00019 10.685C8.05267 10.6271 8.11637 10.5804 8.18744 10.5478C8.2585 10.5152 8.33545 10.4974 8.4136 10.4955C8.49176 10.4935 8.56949 10.5075 8.64208 10.5365C8.71468 10.5655 8.78061 10.609 8.8359 10.6643C8.89118 10.7196 8.93465 10.7855 8.96367 10.8581C8.99269 10.9307 9.00665 11.0084 9.00472 11.0866C9.00278 11.1647 8.98498 11.2417 8.9524 11.3128C8.91982 11.3838 8.87314 11.4475 8.81519 11.5L7.66219 12.653C7.60864 12.7066 7.54504 12.7492 7.47503 12.7782C7.40502 12.8072 7.32997 12.8221 7.25419 12.822H5.53019V15.275L15.9862 18.391V16.281H14.2562C14.1804 16.2811 14.1054 16.2662 14.0353 16.2372C13.9653 16.2082 13.9017 16.1656 13.8482 16.112L12.6952 14.959C12.6372 14.9065 12.5906 14.8428 12.558 14.7718C12.5254 14.7007 12.5076 14.6237 12.5057 14.5456C12.5037 14.4674 12.5177 14.3897 12.5467 14.3171C12.5757 14.2445 12.6192 14.1786 12.6745 14.1233C12.7298 14.068 12.7957 14.0245 12.8683 13.9955C12.9409 13.9665 13.0186 13.9525 13.0968 13.9545C13.1749 13.9564 13.2519 13.9742 13.3229 14.0068C13.394 14.0394 13.4577 14.0861 13.5102 14.144L14.4942 15.128H18.6292L19.6132 14.144C19.6657 14.0861 19.7294 14.0394 19.8004 14.0068C19.8715 13.9742 19.9484 13.9564 20.0266 13.9545C20.1048 13.9525 20.1825 13.9665 20.2551 13.9955C20.3277 14.0245 20.3936 14.068 20.4489 14.1233C20.5042 14.1786 20.5476 14.2445 20.5767 14.3171C20.6057 14.3897 20.6197 14.4674 20.6177 14.5456C20.6158 14.6237 20.598 14.7007 20.5654 14.7718C20.5328 14.8428 20.4861 14.9065 20.4282 14.959L19.2762 16.116C19.2226 16.1696 19.159 16.2122 19.089 16.2412C19.019 16.2702 18.944 16.2851 18.8682 16.285H17.1382V19.168C17.1382 19.2578 17.1172 19.3463 17.0769 19.4265C17.0367 19.5068 16.9782 19.5765 16.9063 19.6302C16.8343 19.6839 16.7509 19.7201 16.6625 19.7358C16.5741 19.7516 16.4833 19.7465 16.3972 19.721L11.6852 18.321L13.6532 20.852C13.6845 20.9391 13.6943 21.0324 13.682 21.1242C13.6696 21.2159 13.6353 21.3033 13.5821 21.379C13.5288 21.4547 13.4582 21.5164 13.376 21.5591C13.2939 21.6017 13.2027 21.624 13.1102 21.624H8.49819C8.40565 21.624 8.31446 21.6017 8.23233 21.5591C8.1502 21.5164 8.07953 21.4547 8.02629 21.379C7.97305 21.3033 7.9388 21.2159 7.92642 21.1242C7.91405 21.0324 7.92391 20.9391 7.95519 20.852L10.0092 17.816L4.79319 16.262C4.67303 16.2273 4.5674 16.1545 4.49219 16.0546C4.41698 15.9547 4.37627 15.8331 4.37619 15.708V12.825H2.64719C2.57141 12.8251 2.49636 12.8102 2.42635 12.7812C2.35634 12.7522 2.29274 12.7096 2.23919 12.656L1.08619 11.5C1.02824 11.4475 0.981557 11.3838 0.948977 11.3128C0.916396 11.2417 0.898598 11.1647 0.896661 11.0866C0.894725 11.0084 0.908691 10.9307 0.937712 10.8581C0.966733 10.7855 1.0102 10.7196 1.06548 10.6643C1.12076 10.609 1.1867 10.5655 1.2593 10.5365C1.33189 10.5075 1.40962 10.4935 1.48778 10.4955C1.56593 10.4974 1.64288 10.5152 1.71394 10.5478C1.78501 10.5804 1.84871 10.6271 1.90119 10.685ZM11.7692 20.463L10.7582 19.141L9.71619 20.463H11.7692Z"
              fill="#8186AF"
            />
            <path
              d="M7.52152 7.58203L5.12952 5.78803C5.09446 5.76086 5.05137 5.74612 5.00702 5.74612C4.96267 5.74612 4.91955 5.76086 4.88449 5.78803L2.49249 7.58203C2.44784 7.61551 2.39705 7.63988 2.34299 7.65373C2.28892 7.66758 2.23265 7.67065 2.1774 7.66276C2.06582 7.64682 1.96512 7.5872 1.89749 7.49703C1.82986 7.40685 1.80083 7.29351 1.81677 7.18192C1.83271 7.07034 1.89234 6.96966 1.98251 6.90203L4.53851 4.98503C4.67394 4.8843 4.83824 4.8299 5.00702 4.8299C5.1758 4.8299 5.34007 4.8843 5.4755 4.98503L8.0315 6.90203C8.12167 6.96966 8.1813 7.07034 8.19724 7.18192C8.21318 7.29351 8.18415 7.40685 8.11652 7.49703C8.04889 7.5872 7.94819 7.64682 7.83661 7.66276C7.72503 7.6787 7.61169 7.64966 7.52152 7.58203Z"
              fill="#FA544D"
            />
            <path d="M6.02606 8.29602H5.20605V9.11201H6.02203L6.02606 8.29602Z" fill="#FA544D" />
            <path d="M4.80331 8.29602H3.9873V9.11201H4.80331V8.29602Z" fill="#FA544D" />
            <path
              d="M2.94672 7.75201L4.53071 6.56401C4.66864 6.46157 4.83588 6.40625 5.0077 6.40625C5.17951 6.40625 5.34679 6.46157 5.48472 6.56401L7.0687 7.75201C7.16715 7.82633 7.24709 7.92241 7.30225 8.03274C7.35742 8.14307 7.38634 8.26466 7.38673 8.38801V10.199C7.38673 10.2253 7.38155 10.2513 7.3715 10.2756C7.36145 10.2998 7.3467 10.3219 7.32813 10.3404C7.30956 10.359 7.28752 10.3737 7.26325 10.3838C7.23899 10.3938 7.21298 10.399 7.18671 10.399H2.83671C2.81044 10.399 2.78444 10.3938 2.76017 10.3838C2.73591 10.3737 2.71386 10.359 2.69529 10.3404C2.67672 10.3219 2.66198 10.2998 2.65192 10.2756C2.64187 10.2513 2.63673 10.2253 2.63673 10.199V8.38801C2.63617 8.26533 2.66381 8.14416 2.71757 8.03388C2.77132 7.9236 2.84974 7.82716 2.94672 7.75201ZM3.50871 9.59001C3.50871 9.62396 3.52221 9.65652 3.54621 9.68052C3.57022 9.70453 3.60278 9.71801 3.63673 9.71801H6.37772C6.41167 9.71801 6.4442 9.70453 6.46821 9.68052C6.49221 9.65652 6.50571 9.62396 6.50571 9.59001V8.44801C6.50571 8.37039 6.48763 8.29383 6.45292 8.22441C6.41821 8.15498 6.3678 8.09459 6.3057 8.04801L5.3057 7.29901C5.21915 7.2341 5.1139 7.19901 5.00571 7.19901C4.89753 7.19901 4.79228 7.2341 4.70573 7.29901L3.70573 8.04801C3.64363 8.09459 3.59322 8.15498 3.55851 8.22441C3.5238 8.29383 3.50571 8.37039 3.50571 8.44801L3.50871 9.59001Z"
              fill="#FA544D"
            />
            <path
              d="M2.83203 5.03405C2.83203 4.981 2.85312 4.93013 2.89062 4.89262C2.92813 4.85512 2.979 4.83405 3.03204 4.83405H3.44003C3.49308 4.83405 3.54397 4.85512 3.58148 4.89262C3.61899 4.93013 3.64005 4.981 3.64005 5.03405V5.14305L2.83203 5.75305V5.03405Z"
              fill="#FA544D"
            />
            <path
              d="M16.583 12.667C15.3469 12.667 14.1385 12.3004 13.1107 11.6137C12.0829 10.9269 11.2818 9.9508 10.8088 8.80877C10.3357 7.66673 10.2119 6.41006 10.4531 5.19768C10.6943 3.9853 11.2895 2.87166 12.1636 1.99758C13.0377 1.1235 14.1513 0.528245 15.3637 0.287087C16.5761 0.0459294 17.8327 0.1697 18.9748 0.642748C20.1168 1.1158 21.0929 1.91687 21.7797 2.94468C22.4665 3.97249 22.833 5.18086 22.833 6.417C22.8312 8.07403 22.1721 9.66266 21.0004 10.8344C19.8287 12.0061 18.24 12.6651 16.583 12.667ZM16.583 1.609C15.6321 1.609 14.7025 1.89098 13.9118 2.41929C13.1212 2.9476 12.5049 3.69851 12.141 4.57705C11.7771 5.4556 11.6819 6.42233 11.8674 7.35499C12.0529 8.28765 12.5108 9.14435 13.1832 9.81676C13.8557 10.4892 14.7124 10.9471 15.645 11.1326C16.5777 11.3181 17.5444 11.2229 18.4229 10.859C19.3015 10.4951 20.0524 9.87885 20.5807 9.08818C21.109 8.29751 21.391 7.36793 21.391 6.417C21.3897 5.14224 20.8827 3.92008 19.9813 3.01869C19.0799 2.1173 17.8578 1.61032 16.583 1.609Z"
              fill="#FA544D"
            />
            <path
              d="M16.5831 9.58797C15.956 9.58797 15.3429 9.402 14.8214 9.05356C14.2999 8.70513 13.8935 8.20989 13.6535 7.63046C13.4135 7.05104 13.3507 6.41346 13.473 5.79834C13.5954 5.18323 13.8974 4.61821 14.3409 4.17474C14.7844 3.73127 15.3494 3.42926 15.9645 3.3069C16.5796 3.18455 17.2172 3.24735 17.7966 3.48735C18.376 3.72736 18.8713 4.13379 19.2197 4.65526C19.5681 5.17673 19.7541 5.78981 19.7541 6.41697C19.753 7.25765 19.4186 8.06359 18.8242 8.65804C18.2297 9.25249 17.4238 9.58691 16.5831 9.58797Z"
              fill="#FA544D"
            />
          </svg>
        </span>
        <span className="profile__options-img">
          <svg
            width="23"
            height="23"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.85978 5.27197C8.14776 5.27197 7.45173 5.4831 6.85972 5.87868C6.2677 6.27425 5.80628 6.83649 5.5338 7.49431C5.26133 8.15212 5.19003 8.87596 5.32894 9.5743C5.46785 10.2726 5.81071 10.9141 6.31418 11.4176C6.81765 11.921 7.45911 12.2639 8.15745 12.4028C8.85578 12.5417 9.57962 12.4704 10.2374 12.1979C10.8952 11.9255 11.4575 11.464 11.8531 10.872C12.2486 10.28 12.4598 9.58399 12.4598 8.87198C12.4598 7.9172 12.0805 7.00152 11.4054 6.32639C10.7302 5.65125 9.81456 5.27197 8.85978 5.27197ZM8.85978 11.028C8.43297 11.028 8.01573 10.9014 7.66085 10.6643C7.30597 10.4272 7.02937 10.0901 6.86603 9.6958C6.7027 9.30148 6.65996 8.86759 6.74323 8.44897C6.8265 8.03036 7.03204 7.64584 7.33384 7.34404C7.63564 7.04224 8.02016 6.8367 8.43877 6.75343C8.85738 6.67017 9.29128 6.7129 9.6856 6.87624C10.0799 7.03957 10.417 7.31617 10.6541 7.67105C10.8912 8.02593 11.0178 8.44317 11.0178 8.86998C11.017 9.44207 10.7894 9.9905 10.3848 10.395C9.9803 10.7996 9.43187 11.0272 8.85978 11.028Z"
              fill="#8186AF"
            />
            <path
              d="M16.8764 6.71899L14.8334 6.38999L16.0534 4.76399C16.157 4.62603 16.2077 4.45544 16.1961 4.28328C16.1846 4.11112 16.1116 3.94884 15.9904 3.82599L13.9474 1.75299C13.8256 1.62875 13.6628 1.55305 13.4893 1.53998C13.3158 1.52692 13.1434 1.57739 13.0044 1.68199L11.3334 2.85599L11.0084 0.839985C10.9813 0.671201 10.8949 0.517595 10.7648 0.406722C10.6347 0.295849 10.4693 0.234963 10.2984 0.234985H7.4204C7.24733 0.23492 7.08005 0.297281 6.94926 0.41062C6.81847 0.523959 6.73295 0.68067 6.7084 0.851985L6.3714 2.89199L4.7094 1.67599C4.57107 1.57434 4.40091 1.52561 4.22975 1.53863C4.05858 1.55166 3.89775 1.62558 3.7764 1.74699L1.7404 3.77599C1.61741 3.89847 1.54287 4.06131 1.53056 4.23444C1.51825 4.40758 1.56898 4.57933 1.6734 4.71799L2.8654 6.38699L0.850399 6.67499C0.679084 6.69954 0.522372 6.78506 0.409033 6.91585C0.295694 7.04664 0.233334 7.21392 0.233399 7.38699V10.265C0.233156 10.438 0.295478 10.6053 0.408871 10.7359C0.522264 10.8666 0.679081 10.9519 0.850399 10.976L2.8954 11.306L1.6734 12.932C1.56885 13.0705 1.51795 13.2422 1.53008 13.4153C1.54221 13.5885 1.61656 13.7514 1.7394 13.874L3.7754 15.91C3.8979 16.033 4.06083 16.1075 4.23402 16.1196C4.40722 16.1318 4.57894 16.0807 4.7174 15.976L6.3854 14.784L6.6734 16.798C6.69795 16.9693 6.78347 17.126 6.91426 17.2394C7.04505 17.3527 7.21233 17.4151 7.3854 17.415H10.2634C10.4362 17.4151 10.6032 17.353 10.734 17.2401C10.8647 17.1272 10.9504 16.9709 10.9754 16.8L11.3054 14.755L12.9334 15.978C13.0719 16.0827 13.2436 16.1338 13.4168 16.1216C13.59 16.1095 13.7529 16.035 13.8754 15.912L15.9114 13.876C16.0342 13.7534 16.1086 13.5905 16.1207 13.4173C16.1329 13.2442 16.0819 13.0725 15.9774 12.934L14.7634 11.268L16.8574 11.023C17.0325 11.0026 17.194 10.9187 17.3113 10.787C17.4285 10.6554 17.4934 10.4853 17.4934 10.309V7.43098C17.4935 7.25792 17.4311 7.09064 17.3178 6.95985C17.2044 6.82906 17.0477 6.74354 16.8764 6.71899ZM16.0554 9.66799L14.5874 9.83899C14.3334 9.86941 14.0924 9.96828 13.8902 10.125C13.688 10.2818 13.5322 10.4906 13.4394 10.729C13.3368 10.9625 13.2978 11.219 13.3265 11.4724C13.3551 11.7259 13.4503 11.9672 13.6024 12.172L14.4504 13.298L13.2974 14.451L12.1664 13.6C11.9696 13.4516 11.7374 13.3573 11.4929 13.3262C11.2484 13.2952 11 13.3285 10.7724 13.423C10.5248 13.5111 10.3062 13.6657 10.1406 13.8697C9.97493 14.0738 9.86866 14.3195 9.8334 14.58L9.6334 15.98H8.0094L7.8094 14.592C7.77986 14.3373 7.68149 14.0955 7.52486 13.8925C7.36823 13.6896 7.15926 13.5331 6.9204 13.44C6.68676 13.3372 6.43006 13.2981 6.17642 13.3268C5.92278 13.3554 5.68125 13.4507 5.4764 13.603L4.3504 14.451L3.1984 13.299L4.0494 12.168C4.19748 11.971 4.29168 11.7389 4.32272 11.4945C4.35375 11.25 4.32056 11.0017 4.2264 10.774C4.13756 10.5271 3.98255 10.3094 3.77832 10.1447C3.57408 9.97995 3.3285 9.87454 3.0684 9.83999L1.6684 9.63999V8.01098L3.0574 7.81099C3.31118 7.78058 3.55193 7.68182 3.75395 7.52524C3.95596 7.36867 4.11166 7.16016 4.2044 6.92199C4.30723 6.68841 4.3464 6.43178 4.31795 6.17816C4.2895 5.92454 4.19443 5.68297 4.0424 5.47799L3.1994 4.35299L4.3554 3.20099L5.5184 4.05099C5.72441 4.19801 5.96462 4.28987 6.21617 4.31781C6.46772 4.34575 6.72223 4.30885 6.95549 4.21061C7.18874 4.11238 7.39297 3.95609 7.54874 3.7566C7.70451 3.55712 7.80664 3.3211 7.8454 3.07099L8.0454 1.67099H9.6854L9.9084 3.05799C9.93848 3.31237 10.0372 3.55379 10.194 3.75637C10.3508 3.95894 10.5597 4.11506 10.7984 4.20799C11.0316 4.31025 11.2876 4.34912 11.5407 4.32067C11.7937 4.29223 12.0347 4.19747 12.2394 4.04599L13.3634 3.20599L14.5334 4.39299L13.6794 5.52799C13.5324 5.734 13.4405 5.97421 13.4126 6.22576C13.3846 6.4773 13.4215 6.73182 13.5198 6.96507C13.618 7.19833 13.7743 7.40256 13.9738 7.55833C14.1733 7.7141 14.4093 7.81623 14.6594 7.85498L16.0594 8.05499V9.66899L16.0554 9.66799Z"
              fill="#8186AF"
            />
          </svg>
        </span>
        <span className="profile__options-img">
          <svg
            width="23"
            height="23"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.33301 21C7.50445 20.9992 6.71006 20.6697 6.12418 20.0838C5.5383 19.498 5.2088 18.7036 5.20801 17.875C5.20801 17.7092 5.27386 17.5503 5.39107 17.433C5.50828 17.3158 5.66725 17.25 5.83301 17.25C5.99877 17.25 6.15774 17.3158 6.27495 17.433C6.39216 17.5503 6.45801 17.7092 6.45801 17.875C6.45801 18.3723 6.65556 18.8492 7.00719 19.2008C7.35882 19.5525 7.83573 19.75 8.33301 19.75C8.83029 19.75 9.3072 19.5525 9.65883 19.2008C10.0105 18.8492 10.208 18.3723 10.208 17.875C10.208 17.7092 10.2739 17.5503 10.3911 17.433C10.5083 17.3158 10.6672 17.25 10.833 17.25C10.9988 17.25 11.1577 17.3158 11.2749 17.433C11.3922 17.5503 11.458 17.7092 11.458 17.875C11.4572 18.7036 11.1277 19.498 10.5418 20.0838C9.95596 20.6697 9.16157 20.9992 8.33301 21Z"
              fill="#8186AF"
            />
            <path
              d="M15.2078 18.5H1.45778C1.15974 18.4997 0.868932 18.4082 0.624464 18.2377C0.379996 18.0673 0.1936 17.826 0.0903495 17.5464C-0.0129007 17.2669 -0.0280521 16.9624 0.0469336 16.6739C0.121919 16.3855 0.283445 16.1269 0.509782 15.933C0.529835 15.9157 0.551236 15.8999 0.573782 15.886C1.17869 15.3601 1.66366 14.7106 1.99593 13.9811C2.3282 13.2517 2.50002 12.4595 2.49978 11.658V9.33298C2.49507 8.02187 2.93473 6.74784 3.74705 5.71868C4.55938 4.68952 5.69643 3.96595 6.97278 3.66598C7.13417 3.62793 7.30406 3.65554 7.44509 3.74274C7.58611 3.82995 7.68672 3.9696 7.72478 4.13099C7.76284 4.29237 7.73523 4.46227 7.64803 4.60329C7.56082 4.74432 7.42117 4.84493 7.25978 4.88299C6.2576 5.11828 5.36482 5.68646 4.72729 6.49473C4.08976 7.30299 3.74516 8.30356 3.74978 9.33298V11.658C3.74983 12.6525 3.53339 13.6351 3.11549 14.5376C2.69759 15.44 2.08825 16.2407 1.32978 16.884L1.29578 16.911C1.26575 16.948 1.24949 16.9943 1.24978 17.042C1.25056 17.0969 1.27272 17.1494 1.31156 17.1882C1.3504 17.227 1.40286 17.2492 1.45778 17.25H15.2078C15.2627 17.2492 15.3152 17.227 15.354 17.1882C15.3928 17.1494 15.415 17.0969 15.4158 17.042C15.4163 16.9946 15.4 16.9485 15.3698 16.912C15.3578 16.903 15.3468 16.894 15.3358 16.884C14.5962 16.2561 13.9989 15.4778 13.5838 14.601C13.5164 14.4518 13.5102 14.2821 13.5666 14.1284C13.623 13.9747 13.7374 13.8493 13.8853 13.7791C14.0332 13.7089 14.2027 13.6995 14.3575 13.753C14.5122 13.8064 14.6398 13.9185 14.7128 14.065C15.0419 14.7615 15.5118 15.3822 16.0928 15.888C16.1143 15.9021 16.135 15.9175 16.1548 15.934C16.3817 16.1276 16.5437 16.3862 16.619 16.6749C16.6943 16.9635 16.6793 17.2683 16.576 17.5481C16.4726 17.8279 16.286 18.0693 16.0411 18.2397C15.7963 18.4101 15.5051 18.5013 15.2068 18.501L15.2078 18.5Z"
              fill="#8186AF"
            />
            <path
              d="M14.583 12.667C13.3469 12.667 12.1385 12.3004 11.1107 11.6137C10.0829 10.9269 9.28182 9.9508 8.80877 8.80877C8.33572 7.66673 8.21194 6.41006 8.4531 5.19768C8.69426 3.9853 9.28952 2.87166 10.1636 1.99758C11.0377 1.1235 12.1513 0.528245 13.3637 0.287087C14.5761 0.0459294 15.8327 0.1697 16.9748 0.642748C18.1168 1.1158 19.0929 1.91687 19.7797 2.94468C20.4665 3.97249 20.833 5.18086 20.833 6.417C20.8312 8.07403 20.1721 9.66266 19.0004 10.8344C17.8287 12.0061 16.24 12.6651 14.583 12.667ZM14.583 1.609C13.6321 1.609 12.7025 1.89098 11.9118 2.41929C11.1212 2.9476 10.5049 3.69851 10.141 4.57705C9.77709 5.4556 9.68187 6.42233 9.86739 7.35499C10.0529 8.28765 10.5108 9.14435 11.1832 9.81676C11.8557 10.4892 12.7124 10.9471 13.645 11.1326C14.5777 11.3181 15.5444 11.2229 16.4229 10.859C17.3015 10.4951 18.0524 9.87885 18.5807 9.08818C19.109 8.29751 19.391 7.36793 19.391 6.417C19.3897 5.14224 18.8827 3.92008 17.9813 3.01869C17.0799 2.1173 15.8578 1.61032 14.583 1.609Z"
              fill="#FA544D"
            />
            <path
              d="M14.5831 9.58797C13.956 9.58797 13.3429 9.402 12.8214 9.05356C12.2999 8.70513 11.8935 8.20989 11.6535 7.63046C11.4135 7.05104 11.3507 6.41346 11.473 5.79834C11.5954 5.18323 11.8974 4.61821 12.3409 4.17474C12.7844 3.73127 13.3494 3.42926 13.9645 3.3069C14.5796 3.18455 15.2172 3.24735 15.7966 3.48735C16.376 3.72736 16.8713 4.13379 17.2197 4.65526C17.5681 5.17673 17.7541 5.78981 17.7541 6.41697C17.753 7.25765 17.4186 8.06359 16.8242 8.65804C16.2297 9.25249 15.4238 9.58691 14.5831 9.58797Z"
              fill="#8186AF"
            />
          </svg>
        </span>
      </div>
      <div className="profile__user">
        <img className='profile__user-img' src={user} alt="" />
        <h4 className="profile__user-name">Misha Vovk</h4>
      </div>
      <div className="profile__balance">
        <div className="profile__balance-item">
          <img className="profile__balance__item-img" src={payment} alt="" />
          <p className="profile__balance__item-balance">Balance</p>
          <p className="profile__balance__item-number">€ 102394</p>
        </div>
        <div className="profile__balance-item">
          <img className="profile__balance__item-img" src={funded} alt="" />
          <p className="profile__balance__item-balance">Funded</p>
          <p className="profile__balance__item-number">€ 5394</p>
        </div>
        <div className="profile__balance-item">
          <img className="profile__balance__item-img" src={pending} alt="" />
          <p className="profile__balance__item-balance">Pending</p>
          <p className="profile__balance__item-number">€ 62394</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
