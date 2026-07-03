const sceneShell = (title, content) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="640" viewBox="0 0 960 640" xmlns="http://www.w3.org/2000/svg">
  <title>${title}</title>
  <defs>
    <pattern id="grid10" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0H0V20" fill="none" stroke="#dbe6ef" stroke-width="1"/>
    </pattern>
    <pattern id="grid50" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#grid10)"/>
      <path d="M100 0H0V100" fill="none" stroke="#b9c9d6" stroke-width="1.4"/>
    </pattern>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10Z" fill="#243849"/>
    </marker>
    <style>
      .sheet { fill: #f8fbfd; }
      .grid { fill: url(#grid50); }
      .object { fill: #e9eef2; stroke: #1f3444; stroke-width: 3; }
      .section { fill: #c8d3dc; stroke: #1f3444; stroke-width: 2; }
      .material { fill: #d7e5ef; stroke: #1f3444; stroke-width: 2; }
      .accent { fill: #f4d27a; stroke: #1f3444; stroke-width: 2; }
      .glass { fill: #bfe3f2; stroke: #1f3444; stroke-width: 2; }
      .line { fill: none; stroke: #1f3444; stroke-width: 2; }
      .thin { fill: none; stroke: #4d6678; stroke-width: 1.2; }
      .dim { fill: none; stroke: #243849; stroke-width: 1.4; marker-start: url(#arrow); marker-end: url(#arrow); }
      .label { fill: #1f3444; font-family: Arial, Helvetica, sans-serif; font-size: 15px; }
      .small { fill: #1f3444; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }
      .title { fill: #142637; font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700; }
      .stamp { fill: none; stroke: #1f3444; stroke-width: 1.5; }
    </style>
  </defs>
  <rect width="960" height="640" class="sheet"/>
  <rect x="28" y="28" width="904" height="584" class="grid"/>
  ${content}
</svg>`

export const pikazoScenes = {
  house: sceneShell('Pikazo engineering house model', `
  <text x="54" y="66" class="title">HOUSE TEMPLATE - FLOOR PLAN + ELEVATION</text>
  <g transform="translate(70 104)">
    <text x="0" y="-18" class="label">GROUND FLOOR PLAN 1:100</text>
    <rect x="0" y="0" width="430" height="300" class="object" data-material="Concrete slab" data-area-m2="129.00"/>
    <path d="M18 18H412V282H18Z" fill="#f8fbfd" stroke="#1f3444" stroke-width="10" data-material="External walls" data-area-m2="86.40"/>
    <path d="M154 18V282M18 134H412M286 134V282" class="line" stroke-width="7" data-material="Internal partitions" data-area-m2="38.60"/>
    <rect x="42" y="42" width="92" height="68" class="material" data-material="Timber floor finish" data-area-m2="18.20"/>
    <rect x="178" y="42" width="214" height="68" class="material" data-material="Timber floor finish" data-area-m2="42.30"/>
    <rect x="42" y="158" width="92" height="98" class="material" data-material="Ceramic tile" data-area-m2="20.40"/>
    <rect x="178" y="158" width="88" height="98" class="material" data-material="Ceramic tile" data-area-m2="19.80"/>
    <rect x="306" y="158" width="86" height="98" class="material" data-material="Timber floor finish" data-area-m2="17.80"/>
    <rect x="183" y="16" width="76" height="12" class="glass" data-material="Glazing" data-area-m2="5.70"/>
    <rect x="356" y="128" width="48" height="12" class="glass" data-material="Glazing" data-area-m2="3.60"/>
    <path d="M18 326H412" class="dim"/>
    <path d="M-26 18V282" class="dim"/>
    <text x="178" y="348" class="small">12.9 m</text>
    <text x="-58" y="156" class="small" transform="rotate(-90 -58 156)">10.0 m</text>
    <text x="56" y="82" class="small">BED</text>
    <text x="252" y="82" class="small">LIVING / KITCHEN</text>
    <text x="64" y="210" class="small">BATH</text>
    <text x="197" y="210" class="small">HALL</text>
    <text x="325" y="210" class="small">OFFICE</text>
  </g>
  <g transform="translate(560 118)">
    <text x="0" y="-18" class="label">SOUTH ELEVATION</text>
    <rect x="0" y="170" width="300" height="22" class="section" data-material="Concrete plinth" data-area-m2="6.60"/>
    <rect x="24" y="58" width="252" height="112" class="material" data-material="Facade cladding" data-area-m2="59.80"/>
    <path d="M2 58L150 0L298 58Z" class="accent" data-material="Roofing panels" data-area-m2="91.20"/>
    <rect x="62" y="92" width="54" height="58" class="glass" data-material="Glazing" data-area-m2="3.10"/>
    <rect x="184" y="92" width="54" height="58" class="glass" data-material="Glazing" data-area-m2="3.10"/>
    <rect x="132" y="104" width="38" height="66" class="section" data-material="Exterior door" data-area-m2="2.50"/>
    <path d="M0 224H300" class="dim"/>
    <text x="112" y="247" class="small">9.0 m elevation width</text>
  </g>
  <g transform="translate(560 382)">
    <rect width="300" height="150" class="stamp"/>
    <text x="16" y="30" class="label">MATERIAL AREAS</text>
    <text x="16" y="58" class="small">Concrete slab 129.00 m2</text>
    <text x="16" y="78" class="small">Roofing panels 91.20 m2</text>
    <text x="16" y="98" class="small">External walls 86.40 m2</text>
    <text x="16" y="118" class="small">Facade cladding 59.80 m2</text>
  </g>`),

  bridge: sceneShell('Pikazo engineering bridge model', `
  <text x="54" y="66" class="title">BRIDGE TEMPLATE - STEEL GIRDER DECK</text>
  <g transform="translate(70 132)">
    <text x="0" y="-22" class="label">LONGITUDINAL ELEVATION 1:200</text>
    <rect x="0" y="116" width="760" height="24" class="object" data-material="Asphalt wearing surface" data-area-m2="192.00"/>
    <rect x="0" y="140" width="760" height="36" class="section" data-material="Concrete deck slab" data-area-m2="304.00"/>
    <path d="M34 176H726" class="line" stroke-width="8" data-material="Steel main girders" data-area-m2="138.40"/>
    <path d="M96 176V240H40V176M720 176V240H664V176" class="object" data-material="Concrete abutments" data-area-m2="58.00"/>
    <path d="M238 176V252H188V176M572 176V252H522V176" class="object" data-material="Concrete piers" data-area-m2="76.00"/>
    <path d="M40 112H720" class="thin"/>
    <path d="M58 100V116M118 100V116M178 100V116M238 100V116M298 100V116M358 100V116M418 100V116M478 100V116M538 100V116M598 100V116M658 100V116M718 100V116" class="thin"/>
    <path d="M0 300H760" class="dim"/>
    <path d="M40 280H238M238 280H572M572 280H720" class="dim"/>
    <text x="336" y="324" class="small">48.0 m overall span</text>
    <text x="110" y="272" class="small">12.5 m</text>
    <text x="380" y="272" class="small">23.0 m</text>
    <text x="620" y="272" class="small">12.5 m</text>
  </g>
  <g transform="translate(98 450)">
    <text x="0" y="-20" class="label">TYPICAL SECTION</text>
    <rect x="0" y="40" width="320" height="18" class="object" data-material="Waterproof membrane" data-area-m2="96.00"/>
    <rect x="0" y="58" width="320" height="36" class="section" data-material="Concrete deck slab" data-area-m2="0"/>
    <path d="M42 94V140H92V94M228 94V140H278V94" class="object" data-material="Steel main girders" data-area-m2="0"/>
    <path d="M0 22H320" class="dim"/>
    <text x="122" y="16" class="small">8.0 m carriageway</text>
  </g>
  <g transform="translate(560 430)">
    <rect width="300" height="145" class="stamp"/>
    <text x="16" y="30" class="label">MATERIAL AREAS</text>
    <text x="16" y="58" class="small">Concrete deck slab 304.00 m2</text>
    <text x="16" y="78" class="small">Asphalt wearing surface 192.00 m2</text>
    <text x="16" y="98" class="small">Steel main girders 138.40 m2</text>
    <text x="16" y="118" class="small">Concrete piers/abutments 134.00 m2</text>
  </g>`),

  garden: sceneShell('Pikazo engineering garden plan', `
  <text x="54" y="66" class="title">GARDEN TEMPLATE - LANDSCAPE SETOUT PLAN</text>
  <g transform="translate(82 106)">
    <text x="0" y="-18" class="label">PLAN 1:100</text>
    <rect x="0" y="0" width="650" height="430" fill="#eef6ed" stroke="#1f3444" stroke-width="4"/>
    <rect x="24" y="24" width="602" height="382" fill="none" stroke="#4d6678" stroke-width="2" stroke-dasharray="8 8"/>
    <rect x="44" y="44" width="210" height="148" class="material" data-material="Permeable paving" data-area-m2="31.08"/>
    <rect x="274" y="44" width="328" height="148" fill="#d8edd2" stroke="#1f3444" stroke-width="2" data-material="Turf lawn" data-area-m2="48.54"/>
    <rect x="44" y="220" width="156" height="156" class="accent" data-material="Composite decking" data-area-m2="24.34"/>
    <path d="M232 222H604V376H232Z" fill="#e5d8bf" stroke="#1f3444" stroke-width="2" data-material="Planting beds" data-area-m2="57.29"/>
    <path d="M252 242H584V356H252Z" fill="none" stroke="#4d6678" stroke-width="1.5"/>
    <rect x="296" y="226" width="112" height="146" fill="#d7e5ef" stroke="#1f3444" stroke-width="2" data-material="Gravel drainage strip" data-area-m2="16.35"/>
    <circle cx="510" cy="298" r="50" fill="#bfe3f2" stroke="#1f3444" stroke-width="2" data-material="Water feature liner" data-area-m2="7.85"/>
    <path d="M44 412H626" class="dim"/>
    <path d="M-30 24V406" class="dim"/>
    <text x="284" y="438" class="small">18.0 m site width</text>
    <text x="-66" y="230" class="small" transform="rotate(-90 -66 230)">12.0 m site depth</text>
    <text x="96" y="122" class="small">PAVING</text>
    <text x="408" y="122" class="small">LAWN</text>
    <text x="88" y="304" class="small">DECK</text>
    <text x="432" y="304" class="small">PLANTING / WATER</text>
  </g>
  <g transform="translate(770 112)">
    <rect width="128" height="430" class="stamp"/>
    <text x="14" y="30" class="label">LEGEND</text>
    <rect x="16" y="54" width="24" height="16" class="material"/>
    <text x="48" y="67" class="small">Paving</text>
    <rect x="16" y="86" width="24" height="16" fill="#d8edd2" stroke="#1f3444"/>
    <text x="48" y="99" class="small">Lawn</text>
    <rect x="16" y="118" width="24" height="16" class="accent"/>
    <text x="48" y="131" class="small">Decking</text>
    <rect x="16" y="150" width="24" height="16" fill="#e5d8bf" stroke="#1f3444"/>
    <text x="48" y="163" class="small">Beds</text>
    <text x="14" y="216" class="label">AREAS</text>
    <text x="14" y="244" class="small">Planting 57.29</text>
    <text x="14" y="264" class="small">Lawn 48.54</text>
    <text x="14" y="284" class="small">Paving 31.08</text>
    <text x="14" y="304" class="small">Deck 24.34</text>
  </g>`)}
