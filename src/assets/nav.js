(function () {
  // ------------------------------------------------------------------
  // Section data: top-level nav entries with their sub-items.
  // Anchor sub-items use hash hrefs for smooth-scroll.
  // Page sub-items use full hrefs for child page navigation.
  // ------------------------------------------------------------------
  var NAV = [
    {
      id: 'home',
      matchFn: function (p) { return p === '/'; },
      children: []
    },
    {
      id: 'setting',
      matchFn: function (p) { return p.indexOf('/setting') === 0; },
      children: [
        { label: 'The Hidden World',     href: '/setting/#the-hidden-world' },
        { label: 'Humans \u2014 Living Gods', href: '/setting/#humans-living-gods' },
        { label: 'Magic',                href: '/setting/#magic' },
        { label: 'Scale & the World',    href: '/setting/#scale-and-the-world' }
      ]
    },
    {
      id: 'rules',
      matchFn: function (p) { return p.indexOf('/rules') === 0; },
      children: [
        { label: '1. Characters & Attributes',      href: '/rules/#1-characters-and-attributes' },
        { label: '2. Core Resolution',              href: '/rules/#2-core-resolution-attribute-tests-with-boons-and-banes' },
        { label: '3. Grit',                         href: '/rules/#3-grit' },
        { label: '4. Saves',                        href: '/rules/#4-saves' },
        { label: '5. Initiative',                   href: '/rules/#5-initiative' },
        { label: '6. Actions & Reactions',          href: '/rules/#6-actions-and-reactions' },
        { label: '7. Attacks & Combat',             href: '/rules/#7-attacks-and-combat' },
        { label: '8. Armour & Damage',              href: '/rules/#8-armour-and-damage' },
        { label: '9. HP, Wounds & Dying',           href: '/rules/#9-hp-wounds-and-dying' },
        { label: '10. Movement & Conditions',       href: '/rules/#10-movement-range-and-conditions' },
        { label: '11. Monsters & Minions',          href: '/rules/#11-monsters-and-minions' }
      ]
    },
    {
      id: 'species',
      matchFn: function (p) { return p.indexOf('/species') === 0; },
      children: [
        { label: 'Whisperlings', href: '/species/whisperlings/' },
        { label: 'Wayfarers',    href: '/species/wayfarers/' },
        { label: 'Shellbacks',   href: '/species/shellbacks/' },
        { label: 'Rainlings',    href: '/species/rainlings/' },
        { label: 'Veilings',     href: '/species/veilings/' }
      ]
    },
    {
      id: 'equipment',
      matchFn: function (p) { return p.indexOf('/equipment') === 0; },
      children: [
        { label: 'Weapons & Tools',    href: '/equipment/#weapons-and-tools' },
        { label: 'Armour & Clothing',  href: '/equipment/#armour-and-clothing' },
        { label: 'Miscellaneous Gear', href: '/equipment/#miscellaneous-gear' },
        { label: 'Carrying Capacity',  href: '/equipment/#carrying-capacity' }
      ]
    },
    {
      id: 'bestiary',
      matchFn: function (p) { return p.indexOf('/bestiary') === 0; },
      children: [
        { label: 'Standard Threats',  href: '/bestiary/#standard-threats' },
        { label: 'Unique Bosses',     href: '/bestiary/#unique-bosses' },
        { label: 'Adversary Design',  href: '/bestiary/#adversary-design-guidelines' }
      ]
    },
    {
      id: 'campaign',
      matchFn: function (p) { return p.indexOf('/campaign') === 0; },
      children: [
        { label: 'The Three Houses',     href: '/campaign/#the-three-houses' },
        { label: 'Major Locations',      href: '/campaign/#major-locations' },
        { label: 'Factions',             href: '/campaign/#factions' },
        { label: 'Campaign Hooks',       href: '/campaign/#campaign-hooks' },
        { label: 'Secrets of the Block', href: '/campaign/#secrets-of-the-block' },
        { label: 'XP Progression',       href: '/campaign/#xp-progression' }
      ]
    }
  ];

  // ------------------------------------------------------------------
  // Resolve pathPrefix from the stylesheet href at runtime.
  // Works for both root-hosted (localhost) and subdirectory (GitHub Pages).
  // e.g. href="/The-crack-in-the-wall/style.css" → prefix="/The-crack-in-the-wall"
  // ------------------------------------------------------------------
  var prefix = '';
  (function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var idx = href.indexOf('/style.css');
      if (idx > 0) { prefix = href.slice(0, idx); break; }
    }
  })();

  // Strip prefix from pathname before matching, so matchFn patterns work
  // the same whether prefix is '' or '/The-crack-in-the-wall'.
  var currentPath = window.location.pathname.replace(prefix, '') || '/';

  function getActiveSectionId() {
    for (var i = 0; i < NAV.length; i++) {
      if (NAV[i].matchFn(currentPath)) return NAV[i].id;
    }
    return null;
  }

  // Prepend prefix to all child hrefs so links resolve correctly on GitHub Pages
  (function () {
    for (var i = 0; i < NAV.length; i++) {
      for (var j = 0; j < NAV[i].children.length; j++) {
        NAV[i].children[j].href = prefix + NAV[i].children[j].href;
      }
    }
  })();

  // ------------------------------------------------------------------
  // Open a section by id; collapse all others
  // ------------------------------------------------------------------
  function openSection(id) {
    var sections = document.querySelectorAll('.nav-accordion-section');
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionId = section.getAttribute('data-section');
      var subList = section.querySelector('.nav-sub-list');
      var isTarget = sectionId === id;

      section.classList.toggle('open', isTarget);

      if (subList) {
        subList.style.maxHeight = isTarget ? subList.scrollHeight + 'px' : '0';
      }
    }
  }

  // ------------------------------------------------------------------
  // Wire up click handlers and set initial open state
  // ------------------------------------------------------------------
  function init() {
    var activeId = getActiveSectionId();
    if (activeId) openSection(activeId);

    // Top-level link click: open the section (page navigation happens via normal href)
    var topLinks = document.querySelectorAll('.nav-accordion-section > .nav-link-top');
    for (var i = 0; i < topLinks.length; i++) {
      (function (link) {
        link.addEventListener('click', function () {
          var section = link.parentElement;
          var sectionId = section.getAttribute('data-section');
          openSection(sectionId);
          // href navigation follows naturally — no preventDefault
        });
      })(topLinks[i]);
    }

    // Anchor sub-item click on mobile: close the sidebar overlay
    var sidebar = document.querySelector('.sidebar');
    var subLinks = document.querySelectorAll('.nav-sub-list a');
    for (var j = 0; j < subLinks.length; j++) {
      (function (link) {
        link.addEventListener('click', function () {
          if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
          }
        });
      })(subLinks[j]);
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
