// --- DYNAMIC PATH WORKAROUND ---
// This script checks if the current page is in a subfolder.
const isTrackPage = window.location.pathname.includes('/tracks/');
const basePath = isTrackPage ? '../' : '';

const headerHTML = `
<header class="custom-site-header">
    <div class="custom-header-container">
        <div class="logo">
            <!-- ⭐ FIX: The 'basePath' variable is added to the start of paths -->
            <a href="${basePath}index.html"><img src="${basePath}images/IEEE-YESIST12-Logo-1024x307-1.png" alt="YESIST12 Logo"></a>
        </div>
        <nav class="main-nav">
            <ul>
                <!-- ⭐ FIX: All paths now use the dynamic 'basePath' variable -->
                <li><a href="${basePath}index.html">HOME</a></li>
                <li><a href="${basePath}about-us.html">ABOUT US</a></li>
                <li class="has-dropdown">
                    <a href="#">TRACKS <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}tracks/innovation_challenge.html">Innovation Challenge</a></li>
                        <li><a href="${basePath}tracks/junior_einstein.html">Junior Einstein</a></li>
                        <li><a href="${basePath}tracks/maker_fair.html">Maker Fair</a></li>
                        <li><a href="${basePath}tracks/wepower.html">WePOWER Track</a></li>
                        <li><a href="${basePath}tracks/special_track_junior_einstein.html">Special Track</a></li>
                        <li><a href="${basePath}tracks/iengage.html">IEngage Track</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">OUR TEAM <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}steering-committee-2025.html">Steering Committee 2025</a></li>
                        <li><a href="${basePath}advisory-committee-2025.html">Advisory Committee 2025</a></li>
                        <li><a href="${basePath}executive-committee-2025.html">Executive Committee 2025</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">SPONSORS <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}be_a_sponsor.html">Become a Sponsor</a></li>
                        <li><a href="${basePath}sponsors_2024.html">Sponsors 2024</a></li>
                        <li><a href="${basePath}sponsors_2025.html">Sponsors 2025</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">JURY <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}become_jury.html">Become a Jury</a></li>
                        <li><a href="${basePath}jury-2025.html">JURY 2025</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">YESIST12 CORNER <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}brand-toolkit.html">Brand Tool Kit</a></li>
                        <li><a href="${basePath}yesist12-tv.html">YESIST12 TV</a></li>
                        <li><a href="${basePath}gallery.html">Gallery</a></li>
                        <li><a href="${basePath}editions.html">Editions</a></li>
                        <li><a href="${basePath}alumni-registration.html">Alumni</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">AWARDEES <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}achievers.html">ACHIEVERS</a></li>
                        <li><a href="${basePath}pilot-awardees.html">Pilot Awardees</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">PILOT <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="https://portal.ieeeyesist12.org/pilots.php">Pilots 2025</a></li>
                        <li><a href="${basePath}pilot-instructions.html">Pilot Instructions</a></li>
                        <li><a href="${basePath}pilot-awards.html">Pilot Awards</a></li>
                        <li><a href="${basePath}pilot-registration.html">Pilot Registration</a></li>
                        <li><a href="${basePath}pilot-gallery.html">Pilot Gallery</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">FINALE 2025 <i class="fas fa-chevron-down caret"></i></a>
                    <ul class="dropdown">
                        <li><a href="${basePath}finale-2025-venue.html">Finale 2025 Venue</a></li>
                        <li><a href="${basePath}finale-2025-registration.html">Registration and Guidelines</a></li>
                        <li><a href="${basePath}travel-grant-2025.html">Travel Grant 2025</a></li>
                    </ul>
                </li>
                <li><a href="#">SUBMIT ABSTRACT</a></li>
            </ul>
        </nav>
        <button class="hamburger" aria-label="Toggle Navigation">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</header>
`;

// This inserts the HTML at the top of the <body>
document.body.insertAdjacentHTML('afterbegin', headerHTML);
