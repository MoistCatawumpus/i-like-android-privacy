document.addEventListener('DOMContentLoaded', function () {
  const instructionsDiv = document.getElementById('instructions');
  const searchInput = document.getElementById('searchInput');

  const androidPrivacyTools = [
      {
          category: 'Android Adblocking',
          id: 'android-adblocking',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'AdGuard', description: 'Ad-blocker app.', officialsite: 'https://adguard.com/en/adguard-android/overview.html', starred: false, privacyRating: '🟡' },
              { name: 'Blokada', description: 'Open Source ad-blocking/tracker/malware app.', officialsite: 'https://blokada.org/', starred: false, privacyRating: '🟢' },
              { name: 'personalDNSfilter', description: 'DNS Ad-blocker', officialsite: 'https://blokada.org/', starred: true, privacyRating: '🟢' },
              { name: 'InviZible Pro', description: 'Android app for online privacy and security.', officialsite: 'https://github.com/Gedsh/InviZible', starred: true, privacyRating: '🟢' },
              { name: 'AdAway', description: 'Open Source ad-blocker for Android', officialsite: 'https://adaway.org/', starred: false, privacyRating: '🟢' },              
          ]
      },
      {
          category: 'Android App Store',
          id: 'android-app-store',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'F-Droid', description: 'FOSS application catalogue for Android.', officialsite: 'https://f-droid.org/', starred: true, privacyRating: '🟢' },
              { name: 'Droid-ify', description: 'Material F-Droid client.', officialsite: 'https://github.com/Droid-ify/client', starred: true, privacyRating: '🟢' },
              { name: 'Obtainium', description: 'App Updates Directly From the Source.', officialsite: 'https://github.com/ImranR98/Obtainium', starred: true, privacyRating: '🟢' },
              { name: 'Accrescent', description: 'App store focused on security, privacy, and usability.', officialsite: 'https://accrescent.app/', starred: false, privacyRating: '🟢' },
          ]
      },
      {
          category: 'Android Browsers',
          id: 'android-browsers',
          announcementVisible: true,
          announcement: 'Use <a href="https://ublockorigin.com/" target="_blank">uBlock Origin</a> to block ads, tracking, malware, and other annoyances. (Not supported for all android browsers)',
          tools: [
              { name: 'Cromite', description: 'Bromite fork with privacy enhancements.', officialsite: 'https://github.com/uazo/cromite', starred: true, privacyRating: '🟢' },
              { name: 'Tor Browser', description: 'Private, secure, onion-routing Android browser.', officialsite: 'https://tb-manual.torproject.org/mobile-tor/', starred: true, privacyRating: '🟢' },
              { name: 'Mull', description: 'A privacy hardened browser.', officialsite: 'https://gitlab.com/divested-mobile/mull-fenix', starred: true, privacyRating: '🟢' },
              { name: 'DuckDuckGo Private Browser', description: 'Privacy-focused web browser.', officialsite: 'https://duckduckgo.com/app', starred: false, privacyRating: '🟢' },
          ]
      },
            {
          category: 'Android Encryption',
          id: 'android-encryption',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'DroidFS', description: 'Store & access your files securely', officialsite: 'https://f-droid.org/packages/sushi.hardcore.droidfs/', starred: false, privacyRating: '🟡' },
              { name: 'EDS Lite', description: 'Virtual disk encryption', officialsite: 'https://f-droid.org/packages/com.sovworks.edslite/', starred: false, privacyRating: '🟡' },
          ]
      },
            {
          category: 'Android Maps',
          id: 'android-maps',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'OsmAnd~', description: 'Global Mobile Map Viewing & Navigation for Offline and Online OSM Maps.', officialsite: 'https://f-droid.org/packages/net.osmand.plus/', starred: false, privacyRating: '🟡' },
              { name: 'Organic Maps', description: 'Navigate with Privacy - Community-Driven & Open-Source', officialsite: 'https://f-droid.org/packages/app.organicmaps/', starred: true, privacyRating: '🟢' },
          ]
      },
      {
          category: 'Android Messaging',
          id: 'android-messaging',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'Signal', description: 'Privacy-focused messaging app with end-to-end encryption.', officialsite: 'https://signal.org/android/', starred: true, privacyRating: '🟢' },
              { name: 'Telegram', description: 'Cloud-based messaging app. Featuring encrypted chats, groups, and channels.', officialsite: 'https://telegram.org/', starred: false, privacyRating: '🟡' },
              { name: 'Threema', description: 'Secure messaging app that prioritizes privacy.', officialsite: 'https://threema.ch/en/', starred: false, privacyRating: '🟢' },
              { name: 'Briar', description: 'Secure messaging app.', officialsite: 'https://briarproject.org/', starred: true, privacyRating: '🟢' },
          ]
      },
      {
          category: 'Android VPN',
          id: 'android-vpn',
          announcementVisible: true,
          announcement: 'Using a free VPN while torrenting is not advisable. I suggest opting for a paid VPN service that guarantees no data logging for enhanced security.',
          tools: [
              { name: 'Vpnify', description: 'Free VPN', officialsite: 'https://vpnifyapp.com/', starred: false, privacyRating: '🟢' },
              { name: 'AdGuard VPN', description: 'Free VPN', officialsite: 'https://vpnifyapp.com/', starred: false, privacyRating: '🟡' },
              { name: 'Orbot', description: 'TOR VPN', officialsite: 'https://orbot.app/en/', starred: true, privacyRating: '🟢' },
              { name: 'Riseup VPN', description: 'Free VPN', officialsite: 'https://f-droid.org/en/packages/se.leap.riseupvpn/', starred: false, privacyRating: '🟢' },
              { name: 'Mullvad VPN', description: 'Paid VPN', officialsite: 'https://f-droid.org/packages/net.mullvad.mullvadvpn/', starred: false, privacyRating: '🟢' },
          ]
      },
      {
          category: 'Android Two-Factor Authentication',
          id: 'android-2fa',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'Aegis', description: 'Open Source, Secure Authenticator for Android.', officialsite: 'https://getaegis.app/', starred: true, privacyRating: '🟢' },
              { name: 'Ente', description: '2FA app for Android.', officialsite: 'https://github.com/ente-io/auth/', starred: false, privacyRating: '🟢' },
              { name: 'Authenticator Pro', description: 'Open Source 2FA app for Android.', officialsite: 'https://github.com/jamie-mh/AuthenticatorPro', starred: false, privacyRating: '🟢' },
              { name: 'Google Authenticator', description: '2FA app made by Google.', officialsite: 'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US', starred: false, privacyRating: '🟠' },
          ]
      },
      {
          category: 'Android App Permission Managers',
          id: 'android-app-permission-managers',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'TrackerControl', description: 'Permission Manager', officialsite: 'https://trackercontrol.org/', starred: false, privacyRating: '🟢' },
              { name: 'Permission Pilot', description: 'Permission Manager', officialsite: 'https://github.com/d4rken-org/permission-pilot', starred: false, privacyRating: '🟢' },
              { name: 'Yivi', description: 'Permission Manager', officialsite: 'https://github.com/privacybydesign/irmamobile', starred: false, privacyRating: '🟢' },
              { name: 'Exodus', description: 'Permission Manager', officialsite: 'https://reports.exodus-privacy.eu.org/en/', starred: false, privacyRating: '🟢' },
              { name: 'HideDroid', description: 'Permission Manager', officialsite: 'https://github.com/Mobile-IoT-Security-Lab/HideDroid', starred: false, privacyRating: '🟢' },
          ]
      },
      {
          category: 'Android Health Apps',
          id: 'android-health',
          announcementVisible: false,
          announcement: '',
          tools: [
              { name: 'AAT', description: 'GPS-tracking app for sportive activities, with emphasis on cycling.', officialsite: 'https://f-droid.org/packages/ch.bailu.aat', starred: false, privacyRating: '🟢' },
              { name: 'FitoTrack', description: 'Privacy oriented fitness tracker', officialsite: 'https://f-droid.org/packages/de.tadris.fitness', starred: true, privacyRating: '🟢' },
              { name: 'Paseo', description: 'Open source step counting app.', officialsite: 'https://f-droid.org/packages/ca.chancehorizon.paseo/', starred: true, privacyRating: '🟢' },
              { name: 'openWorkout', description: 'Privacy oriented workout trainer.', officialsite: 'https://f-droid.org/packages/com.health.openworkout/', starred: false, privacyRating: '🟢' },
          ]
      },
  ];

    function renderTools(filteredTools) {
        instructionsDiv.innerHTML = '';

        if (filteredTools.length === 0) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.innerHTML = '<p style="text-align: center; font-weight: bold;">No results found</p>';
            instructionsDiv.appendChild(noResultsDiv);
        } else {
            filteredTools.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');
                categoryDiv.id = category.id;

                const sortedTools = category.tools
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .sort((a, b) => b.starred - a.starred);

                categoryDiv.innerHTML = `<h2>${category.category} <span class="link-icon" onclick="copyLink('${category.id}')">🔗</span></h2>`;
                
                if (category.announcementVisible) {
                    const announcementDiv = document.createElement('div');
                    announcementDiv.classList.add('announcement-box');
                    announcementDiv.innerHTML = `<pre class="announcement">${category.announcement}</pre>`;
                    categoryDiv.appendChild(announcementDiv);
                }
                
                instructionsDiv.appendChild(categoryDiv);

                sortedTools.forEach(tool => {
                    const toolDiv = document.createElement('div');
                    toolDiv.classList.add('tool');
                    toolDiv.innerHTML = `<h3>${tool.starred ? '⭐ ' : ''}<a href="${tool.officialsite}" target="_blank">${tool.name}</a> - ${tool.privacyRating}</h3><p class="description">${tool.description}</p><hr>`;
                    categoryDiv.appendChild(toolDiv);
                });
            });
        }
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTools = androidPrivacyTools.map(category => {
            const filteredCategory = {
                category: category.category,
                id: category.id,
                announcementVisible: category.announcementVisible,
                announcement: category.announcement,
                tools: category.tools.filter(tool =>
                    tool.name.toLowerCase().includes(searchTerm)
                )
            };
            return filteredCategory;
        }).filter(category => category.tools.length > 0);

        renderTools(filteredTools);
    });

    const fragment = window.location.hash.substring(1);
    if (fragment) {
        const categoryDiv = document.getElementById(fragment);
        if (categoryDiv) {
            categoryDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }

    renderTools(androidPrivacyTools);

    const githubLogoLink = document.createElement('a');
    githubLogoLink.href = 'https://github.com/MoistCatawumpus';
    githubLogoLink.target = '_blank';

    const githubLogo = document.createElement('img');
    githubLogo.src = 'github.png';
    githubLogo.alt = 'GitHub Logo';
    githubLogo.width = '32';
    githubLogo.height = '32';

    githubLogoLink.appendChild(githubLogo);
    instructionsDiv.appendChild(githubLogoLink);

    const spaceElement = document.createElement('span');
    spaceElement.innerHTML = '&nbsp;';

    instructionsDiv.appendChild(spaceElement);

    const redditLogoLink = document.createElement('a');
    redditLogoLink.href = 'https://www.reddit.com/user/MoistCatawumpus/';
    redditLogoLink.target = '_blank';

    const redditLogo = document.createElement('img');
    redditLogo.src = 'reddit.png';
    redditLogo.alt = 'Reddit Logo';
    redditLogo.width = '32';
    redditLogo.height = '32';

    redditLogoLink.appendChild(redditLogo);
    instructionsDiv.appendChild(redditLogoLink);
});

function copyLink(categoryId) {
    const categoryDiv = document.getElementById(categoryId);
    const link = window.location.href.split('#')[0] + '#' + categoryId;
    navigator.clipboard.writeText(link);

    const copiedMessage = document.createElement('div');
    copiedMessage.classList.add('copied-message');
    copiedMessage.textContent = 'Copied to clipboard!';
    document.body.appendChild(copiedMessage);

    setTimeout(() => {
        copiedMessage.remove();
    }, 2000);
}

