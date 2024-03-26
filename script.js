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
                { name: 'AdGuard', description: 'Ad-blocker app.', officialsite: 'https://adguard.com/en/adguard-android/overview.html', starred: true, privacyRating: '🟢' },
                { name: 'Blokada', description: 'Open Source ad-blocking/tracker/malware app.', officialsite: 'https://blokada.org/', starred: false, privacyRating: '🟢' },
                { name: 'personalDNSfilter', description: 'DNS Ad-blocker', officialsite: 'https://blokada.org/', starred: false, privacyRating: '🟢' },
                { name: 'InviZible Pro', description: 'Android app for online privacy and security.', officialsite: 'https://github.com/Gedsh/InviZible', starred: false, privacyRating: '🟢' },
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
            announcementVisible: false,
            announcement: '',
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
        {
            category: 'Android Password Managers',
            id: 'android-password-managers',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Bitwarden', description: 'Open-source password manager for storing sensitive information securely.', officialsite: 'https://bitwarden.com/', starred: true, privacyRating: '🟢' },
                { name: 'LastPass', description: 'Password manager and password generator that locks your passwords and personal information in a secure vault.', officialsite: 'https://www.lastpass.com/', starred: false, privacyRating: '🟢' },
                { name: 'KeePassDX', description: 'KeePass implementation for Android.', officialsite: 'https://www.keepassdx.com/', starred: true, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Firewall Apps',
            id: 'android-firewall-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'NetGuard', description: 'Easily control internet access for apps, with no rooting required.', officialsite: 'https://github.com/M66B/NetGuard', starred: true, privacyRating: '🟢' },
                { name: 'NoRoot Firewall', description: 'Firewall app for non-rooted Android devices.', officialsite: 'https://play.google.com/store/apps/details?id=app.greyshirts.firewall', starred: false, privacyRating: '🟢' },
                { name: 'AFWall+', description: 'Android Firewall - iptables front-end.', officialsite: 'https://github.com/ukanth/afwall', starred: true, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Anti-Malware Apps',
            id: 'android-anti-malware-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Malwarebytes Security', description: 'Malware scanner and removal tool.', officialsite: 'https://www.malwarebytes.com/mobile/', starred: true, privacyRating: '🟢' },
                { name: 'Avast Antivirus', description: 'Antivirus and security tool.', officialsite: 'https://www.avast.com/', starred: false, privacyRating: '🟠' },
                { name: 'Bitdefender Antivirus', description: 'Antivirus and malware removal app.', officialsite: 'https://www.bitdefender.com/', starred: false, privacyRating: '🟡' }
            ]
        },
        {
            category: 'Android Privacy-focused Keyboards',
            id: 'android-privacy-keyboards',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'AnySoftKeyboard', description: 'Android (f/w) keyboard that supports multi-language, T9, and custom layout.', officialsite: 'https://anysoftkeyboard.github.io/', starred: false, privacyRating: '🟢' },
                { name: 'OpenBoard', description: 'Fork of the AOSP keyboard.', officialsite: 'https://github.com/dslul/openboard', starred: false, privacyRating: '🟢' },
                { name: 'Simple Keyboard', description: 'Simple Keyboard is a keyboard application for Android devices.', officialsite: 'https://github.com/rkkr/simple-keyboard', starred: false, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Cameras',
            id: 'android-privacy-cameras',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'ObscuraCam', description: 'Privacy camera app by Guardian Project.', officialsite: 'https://guardianproject.info/apps/obscuracam/', starred: false, privacyRating: '🟢' },
                { name: 'Open Camera', description: 'Fully featured and completely free Camera app for Android phones and tablets.', officialsite: 'https://opencamera.org.uk/', starred: false, privacyRating: '🟢' },
            ]
        },
        {
            category: 'Android Privacy-focused Email Clients',
            id: 'android-privacy-email-clients',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'ProtonMail', description: 'Secure email based in Switzerland.', officialsite: 'https://protonmail.com/', starred: true, privacyRating: '🟢' },
                { name: 'Tutanota', description: 'End-to-end encrypted email service.', officialsite: 'https://tutanota.com/', starred: false, privacyRating: '🟢' },
                { name: 'FairEmail', description: 'Fully featured, open-source email app.', officialsite: 'https://email.faircode.eu/', starred: false, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Calendar Apps',
            id: 'android-privacy-calendar-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Etar', description: 'Open-source material designed calendar, for everyone!', officialsite: 'https://github.com/Etar-Group/Etar-Calendar', starred: false, privacyRating: '🟢' },
                { name: 'Simple Calendar', description: 'A simple calendar with events, customizable widgets and no ads.', officialsite: 'https://github.com/SimpleMobileTools/Simple-Calendar', starred: false, privacyRating: '🟢' },
                { name: 'DAVx⁵', description: 'Manage your calendars and contacts using CalDAV and CardDAV.', officialsite: 'https://www.davx5.com/', starred: false, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Notes Apps',
            id: 'android-privacy-notes-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Standard Notes', description: 'A simple and private notes app.', officialsite: 'https://standardnotes.org/', starred: false, privacyRating: '🟢' },
                { name: 'Joplin', description: 'Open-source note-taking app.', officialsite: 'https://joplinapp.org/', starred: false, privacyRating: '🟢' },
                { name: 'Carnet', description: 'A free and open-source note taking and personal journal app with a Markdown editor.', officialsite: 'https://getcarnet.app/', starred: false, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Privacy-focused Social Media Apps',
            id: 'android-privacy-social-media-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Minds', description: 'Crypto social network that puts users first.', officialsite: 'https://www.minds.com/', starred: true, privacyRating: '🟢' },
                { name: 'MeWe', description: 'Next-gen social network.', officialsite: 'https://mewe.com/', starred: false, privacyRating: '🟢' },
                { name: 'Vero', description: 'True social. No ads. No algorithms.', officialsite: 'https://www.vero.co/', starred: true, privacyRating: '🟢' }
            ]
        },
        {
            category: 'Android Parental Control Apps',
            id: 'android-privacy-parental-control-apps',
            announcementVisible: false,
            announcement: '',
            tools: [
                { name: 'Qustodio', description: 'Parental control and monitoring software with a strong focus on privacy.', officialsite: 'https://www.qustodio.com/', starred: true, privacyRating: '🟢' },
                { name: 'Norton Family', description: 'Parental control software by NortonLifeLock with privacy features.', officialsite: 'https://family.norton.com/', starred: false, privacyRating: '🟡' },
                { name: 'FamilyTime', description: 'Parental control app that helps parents monitor and manage their children’s device usage.', officialsite: 'https://familytime.io/', starred: true, privacyRating: '🟢' }
            ]
        },     
    ];

    androidPrivacyTools.sort((a, b) => a.category.localeCompare(b.category));

    renderTools(androidPrivacyTools);


    function renderTools(filteredTools) {
        instructionsDiv.innerHTML = '';

        if (filteredTools.length === 0) {
            instructionsDiv.innerHTML = '<div><p style="text-align: center; font-weight: bold;">No results found</p></div>';
        } else {
            filteredTools.forEach(category => {
                const { id, announcementVisible, announcement, category: categoryName, tools } = category;
                const categoryDiv = createCategoryDiv(id, categoryName, announcementVisible, announcement);
                instructionsDiv.appendChild(categoryDiv);
                renderCategoryTools(categoryDiv, tools);
            });
        }

        addExternalLinks();
    }

    function createCategoryDiv(id, categoryName, announcementVisible, announcement) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.id = id;
        categoryDiv.innerHTML = `<h2>${categoryName} <span class="link-icon" onclick="copyLink('${id}')">🔗</span></h2>`;
        if (announcementVisible) {
            const announcementDiv = document.createElement('div');
            announcementDiv.classList.add('announcement-box');
            announcementDiv.innerHTML = `<pre class="announcement">${announcement}</pre>`;
            categoryDiv.appendChild(announcementDiv);
        }
        return categoryDiv;
    }

    function renderCategoryTools(categoryDiv, tools) {
        const starredTools = tools.filter(tool => tool.starred);
        const unstarredTools = tools.filter(tool => !tool.starred);
    
        starredTools.sort((a, b) => a.name.localeCompare(b.name));
        unstarredTools.sort((a, b) => a.name.localeCompare(b.name));
    
        const sortedTools = [...starredTools, ...unstarredTools];
    
        sortedTools.forEach(tool => {
            const { starred, name, officialsite, privacyRating, description } = tool;
            const toolDiv = document.createElement('div');
            toolDiv.classList.add('tool');
            toolDiv.innerHTML = `<h3>${starred ? '⭐ ' : ''}<a href="${officialsite}" target="_blank">${name}</a> - ${privacyRating}</h3><p class="description">${description}</p><hr>`;
            categoryDiv.appendChild(toolDiv);
        });
    }
    
    
    function filterTools(searchTerm) {
        return androidPrivacyTools.map(category => ({
            ...category,
            tools: category.tools.filter(tool => tool.name.toLowerCase().includes(searchTerm))
        })).filter(category => category.tools.length > 0);
    }

    function addExternalLinks() {
        const githubLogoLink = createExternalLink('https://github.com/MoistCatawumpus', 'GitHub Logo', 'github.png');
        instructionsDiv.appendChild(githubLogoLink);

        const spaceElement = document.createElement('span');
        spaceElement.innerHTML = '&nbsp;';
        instructionsDiv.appendChild(spaceElement);

        const redditLogoLink = createExternalLink('https://www.reddit.com/user/MoistCatawumpus/', 'Reddit Logo', 'reddit.png');
        instructionsDiv.appendChild(redditLogoLink);
    }

    function createExternalLink(url, alt, src) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';

        const logo = document.createElement('img');
        logo.src = src;
        logo.alt = alt;
        logo.width = '32';
        logo.height = '32';

        link.appendChild(logo);
        return link;
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTools = filterTools(searchTerm);
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
});

function copyLink(categoryId) {
    const categoryDiv = document.getElementById(categoryId);
    const link = `${window.location.href.split('#')[0]}#${categoryId}`;
    navigator.clipboard.writeText(link);

    const copiedMessage = document.createElement('div');
    copiedMessage.classList.add('copied-message');
    copiedMessage.textContent = 'Copied to clipboard!';
    document.body.appendChild(copiedMessage);

    setTimeout(() => {
        copiedMessage.remove();
    }, 2000);
}
