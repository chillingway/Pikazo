const sceneShell = (title, content) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="640" viewBox="0 0 960 640" xmlns="http://www.w3.org/2000/svg">
  <title>${title}</title>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fd7ff"/>
      <stop offset="1" stop-color="#f5fbff"/>
    </linearGradient>
    <linearGradient id="lawn" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8dcf68"/>
      <stop offset="1" stop-color="#3f8c4e"/>
    </linearGradient>
    <linearGradient id="stone" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#d4d6d0"/>
      <stop offset="1" stop-color="#8c918a"/>
    </linearGradient>
    <pattern id="brick" width="44" height="22" patternUnits="userSpaceOnUse">
      <rect width="44" height="22" fill="#bd6b55"/>
      <path d="M0 21.5H44M22 0V22M0 11H22M22 11H44" fill="none" stroke="#8f4437" stroke-width="1"/>
    </pattern>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#1a2a35" flood-opacity=".25"/>
    </filter>
  </defs>
  ${content}
</svg>`

export const pikazoScenes = {
  house: sceneShell('Pikazo detailed house', `
  <rect width="960" height="640" fill="url(#sky)"/>
  <circle cx="790" cy="98" r="48" fill="#ffd36a"/>
  <path d="M0 486C145 432 269 458 418 503C570 548 750 528 960 464V640H0Z" fill="url(#lawn)"/>
  <path d="M96 528C230 490 309 488 425 528C549 570 677 561 864 506" fill="none" stroke="#d7e3bd" stroke-width="58" stroke-linecap="round"/>
  <g opacity=".45" fill="#ffffff">
    <ellipse cx="148" cy="114" rx="62" ry="22"/>
    <ellipse cx="208" cy="105" rx="76" ry="27"/>
    <ellipse cx="673" cy="78" rx="82" ry="26"/>
    <ellipse cx="735" cy="86" rx="58" ry="20"/>
  </g>
  <g filter="url(#softShadow)">
    <rect x="258" y="256" width="405" height="258" rx="10" fill="url(#brick)" stroke="#63342e" stroke-width="4"/>
    <path d="M219 266L460 116L704 266Z" fill="#633f35" stroke="#412921" stroke-width="5"/>
    <path d="M280 256L460 145L640 256Z" fill="#8a5145"/>
    <rect x="414" y="369" width="92" height="145" rx="4" fill="#714932" stroke="#3c281e" stroke-width="4"/>
    <circle cx="488" cy="444" r="6" fill="#f4ce63"/>
    <rect x="307" y="318" width="78" height="72" rx="5" fill="#d8f0ff" stroke="#375a6c" stroke-width="5"/>
    <path d="M346 320V388M309 354H383" stroke="#375a6c" stroke-width="4"/>
    <rect x="537" y="318" width="78" height="72" rx="5" fill="#d8f0ff" stroke="#375a6c" stroke-width="5"/>
    <path d="M576 320V388M539 354H613" stroke="#375a6c" stroke-width="4"/>
    <rect x="537" y="414" width="75" height="60" rx="5" fill="#d8f0ff" stroke="#375a6c" stroke-width="5"/>
    <path d="M575 416V472M539 444H610" stroke="#375a6c" stroke-width="4"/>
    <rect x="310" y="414" width="75" height="60" rx="5" fill="#d8f0ff" stroke="#375a6c" stroke-width="5"/>
    <path d="M348 416V472M312 444H383" stroke="#375a6c" stroke-width="4"/>
    <rect x="584" y="164" width="45" height="82" fill="#7c4a3c" stroke="#412921" stroke-width="4"/>
    <path d="M573 164H640L625 126H589Z" fill="#5d372f"/>
  </g>
  <g>
    <path d="M154 520C194 470 242 449 300 450" fill="none" stroke="#d7d0c2" stroke-width="28" stroke-linecap="round"/>
    <path d="M154 520C194 470 242 449 300 450" fill="none" stroke="#9b927e" stroke-width="2" stroke-dasharray="12 10"/>
    <g fill="#2e7b43">
      <circle cx="168" cy="418" r="45"/>
      <circle cx="119" cy="442" r="36"/>
      <circle cx="207" cy="454" r="34"/>
    </g>
    <rect x="160" y="449" width="17" height="67" fill="#6e4a2e"/>
    <g fill="#ef6b8a">
      <circle cx="720" cy="486" r="8"/><circle cx="744" cy="472" r="7"/><circle cx="766" cy="492" r="8"/>
      <circle cx="792" cy="475" r="7"/><circle cx="818" cy="494" r="8"/>
    </g>
    <path d="M700 515C743 498 794 498 840 515" fill="none" stroke="#3f8c4e" stroke-width="14" stroke-linecap="round"/>
  </g>`),

  bridge: sceneShell('Pikazo detailed bridge', `
  <rect width="960" height="640" fill="url(#sky)"/>
  <path d="M0 434C177 404 280 426 450 451C607 475 752 455 960 414V640H0Z" fill="#4ba6c9"/>
  <path d="M0 518C158 480 282 506 440 540C602 575 734 553 960 496V640H0Z" fill="#2f799f" opacity=".55"/>
  <path d="M0 404C120 354 259 345 382 390C507 436 634 430 779 369C846 341 907 332 960 337V455C771 499 636 518 480 489C314 459 181 443 0 484Z" fill="#5b9d62"/>
  <g filter="url(#softShadow)">
    <path d="M114 401C247 246 399 211 552 300C650 357 727 379 850 348" fill="none" stroke="#73513f" stroke-width="35" stroke-linecap="round"/>
    <path d="M114 373C248 218 404 184 561 275C655 329 727 350 850 320" fill="none" stroke="#b88466" stroke-width="26" stroke-linecap="round"/>
    <path d="M130 388C249 259 393 228 533 309C626 363 715 391 838 361" fill="none" stroke="#4d3329" stroke-width="5" stroke-linecap="round"/>
    <g stroke="#4d3329" stroke-width="8" stroke-linecap="round">
      <path d="M201 309V422"/><path d="M286 252V425"/><path d="M374 239V441"/>
      <path d="M468 262V462"/><path d="M562 310V475"/><path d="M654 350V470"/>
      <path d="M742 356V445"/>
    </g>
    <g stroke="#e7c39c" stroke-width="5" stroke-linecap="round">
      <path d="M151 362L236 413"/><path d="M236 294L320 424"/><path d="M320 249L412 446"/>
      <path d="M412 246L516 468"/><path d="M516 286L614 474"/><path d="M614 333L704 462"/>
      <path d="M704 349L810 402"/>
    </g>
  </g>
  <g opacity=".55" fill="none" stroke="#d5f3ff" stroke-width="5">
    <path d="M188 500C263 478 334 479 414 505"/>
    <path d="M524 532C602 505 678 505 758 529"/>
    <path d="M83 560C177 532 261 535 344 562"/>
  </g>
  <g fill="#405f39">
    <circle cx="80" cy="360" r="42"/><circle cx="42" cy="394" r="36"/><circle cx="118" cy="401" r="31"/>
    <circle cx="875" cy="303" r="38"/><circle cx="923" cy="325" r="46"/><circle cx="840" cy="336" r="34"/>
  </g>
  <path d="M52 420C119 400 165 404 224 432" fill="none" stroke="#b5d187" stroke-width="18" stroke-linecap="round"/>
  <path d="M775 384C833 360 897 355 956 373" fill="none" stroke="#b5d187" stroke-width="20" stroke-linecap="round"/>`),

  garden: sceneShell('Pikazo detailed garden plan', `
  <rect width="960" height="640" fill="#f6f0dc"/>
  <rect x="70" y="54" width="820" height="532" rx="28" fill="#9bcf7d" stroke="#4f7d43" stroke-width="8"/>
  <path d="M480 72V570M90 320H870" stroke="#f5ead2" stroke-width="48" stroke-linecap="round"/>
  <path d="M480 72V570M90 320H870" stroke="#c8b48a" stroke-width="3" stroke-dasharray="10 12"/>
  <circle cx="480" cy="320" r="98" fill="#e5d9bd" stroke="#8a7659" stroke-width="6"/>
  <circle cx="480" cy="320" r="58" fill="#7fc4d6" stroke="#3a7685" stroke-width="5"/>
  <circle cx="480" cy="320" r="24" fill="#f6fbff" opacity=".65"/>
  <g fill="#7d4c2f" stroke="#5b3825" stroke-width="3">
    <rect x="118" y="96" width="218" height="92" rx="16"/>
    <rect x="624" y="96" width="218" height="92" rx="16"/>
    <rect x="118" y="452" width="218" height="92" rx="16"/>
    <rect x="624" y="452" width="218" height="92" rx="16"/>
  </g>
  <g fill="none" stroke="#d6a36f" stroke-width="4">
    <path d="M140 126H315M140 158H315M646 126H821M646 158H821M140 482H315M140 514H315M646 482H821M646 514H821"/>
  </g>
  <g fill="#e85c79">
    <circle cx="156" cy="120" r="8"/><circle cx="205" cy="151" r="8"/><circle cx="274" cy="125" r="8"/>
    <circle cx="666" cy="151" r="8"/><circle cx="732" cy="121" r="8"/><circle cx="804" cy="158" r="8"/>
    <circle cx="151" cy="508" r="8"/><circle cx="242" cy="486" r="8"/><circle cx="304" cy="516" r="8"/>
    <circle cx="662" cy="486" r="8"/><circle cx="733" cy="517" r="8"/><circle cx="813" cy="486" r="8"/>
  </g>
  <g fill="#f4d35e">
    <circle cx="181" cy="157" r="7"/><circle cx="246" cy="121" r="7"/><circle cx="307" cy="158" r="7"/>
    <circle cx="652" cy="122" r="7"/><circle cx="769" cy="153" r="7"/><circle cx="822" cy="121" r="7"/>
    <circle cx="184" cy="486" r="7"/><circle cx="271" cy="518" r="7"/><circle cx="316" cy="482" r="7"/>
    <circle cx="694" cy="516" r="7"/><circle cx="765" cy="486" r="7"/><circle cx="826" cy="516" r="7"/>
  </g>
  <g fill="#396f3d">
    <circle cx="105" cy="77" r="22"/><circle cx="855" cy="77" r="22"/><circle cx="105" cy="563" r="22"/><circle cx="855" cy="563" r="22"/>
    <circle cx="218" cy="274" r="20"/><circle cx="260" cy="366" r="20"/><circle cx="700" cy="274" r="20"/><circle cx="742" cy="366" r="20"/>
  </g>
  <g stroke="#4f7d43" stroke-width="6" stroke-linecap="round">
    <path d="M128 246C196 219 259 218 328 246"/>
    <path d="M632 246C700 219 763 218 832 246"/>
    <path d="M128 394C196 421 259 422 328 394"/>
    <path d="M632 394C700 421 763 422 832 394"/>
  </g>
  <g fill="#ffffff" stroke="#8a7659" stroke-width="2">
    <rect x="420" y="198" width="120" height="32" rx="8"/>
    <rect x="420" y="410" width="120" height="32" rx="8"/>
    <rect x="214" y="304" width="98" height="32" rx="8"/>
    <rect x="648" y="304" width="98" height="32" rx="8"/>
  </g>`)}
