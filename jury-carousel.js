document.addEventListener('DOMContentLoaded', function() {
    // --- Data ---
    const committeeMembers = {
        '1': {
            name: 'Dr. Ramalatha Marimuthu',
            title: 'Chair, YESIST12 2025',
            bio: 'Dr. Ramalatha Marimuthu is a distinguished professor with extensive experience in IEEE leadership roles. She has led numerous initiatives to promote technology education and innovation among young engineers. With over 20 years of experience in academia and research, she has contributed significantly to the field of engineering education.',
            affiliation: 'Kumaraguru College of Technology, India',
            responsibilities: 'As the General Chair of YESIST12 2025, Dr. Marimuthu oversees all aspects of the program, including strategic planning, partnership development, and overall execution of the event.',
            contact: 'Email: ramalatha.m@kct.ac.in | LinkedIn: linkedin.com/in/ramalatha-marimuthu-0aa6a78/',
            image: 'images/Mukesh K.jpg'
        },
        '2': {
            name: 'Dr. Rukmani Devi R K',
            title: 'Co-Chair, YESIST12 2025',
            bio: 'Dr. Rukmani Devi R K is a renowned researcher and educator with a focus on sustainable technology. Her work has been instrumental in developing innovative approaches to engineering education and research. She has published numerous papers in international journals and conferences.',
            affiliation: 'Sri Sairam Engineering College, India',
            responsibilities: 'As Program Coordinator, Dr. Rukmani Devi manages the technical program, coordinates with track chairs, and ensures smooth execution of all program activities.',
            contact: 'Email: rukmani.cse@sairam.edu.in | LinkedIn: linkedin.com/in/rukmani-devi-r-k-0b845a20/',
            image: 'images/Mukesh K.jpg'
        },
        '3': {
            name: 'Dr. Gunjan Varshney',
            title: 'Co-Chair, YESIST12 2025',
            bio: 'Dr. Gunjan Varshney is an expert in emerging technologies and has led multiple international collaborations. She has published extensively in the field of computer science and engineering. Her research interests include artificial intelligence, machine learning, and their applications in solving real-world problems.',
            affiliation: 'JSS Academy of Technical Education, India',
            responsibilities: 'As Chair of the Innovation Challenge Track, Dr. Varshney leads the evaluation and selection process for innovative projects, coordinates with judges, and ensures high standards for all submissions.',
            contact: 'Email: gunjanvarshney@jssaten.ac.in | LinkedIn: linkedin.com/in/dr-gunjan-varshney-6a881b20/',
            image: 'images/Mukesh K.jpg'
        },
        // Duplicated members to reach 6
        '4': {
            name: 'Dr. Ramalatha Marimuthu',
            title: 'Chair, YESIST12 2025',
            bio: 'Dr. Ramalatha Marimuthu is a distinguished professor with extensive experience in IEEE leadership roles. She has led numerous initiatives to promote technology education and innovation among young engineers. With over 20 years of experience in academia and research, she has contributed significantly to the field of engineering education.',
            affiliation: 'Kumaraguru College of Technology, India',
            responsibilities: 'As the General Chair of YESIST12 2025, Dr. Marimuthu oversees all aspects of the program, including strategic planning, partnership development, and overall execution of the event.',
            contact: 'Email: ramalatha.m@kct.ac.in | LinkedIn: linkedin.com/in/ramalatha-marimuthu-0aa6a78/',
            image: 'images/Mukesh K.jpg'
        },
        '5': {
            name: 'Dr. Rukmani Devi R K',
            title: 'Co-Chair, YESIST12 2025',
            bio: 'Dr. Rukmani Devi R K is a renowned researcher and educator with a focus on sustainable technology. Her work has been instrumental in developing innovative approaches to engineering education and research. She has published numerous papers in international journals and conferences.',
            affiliation: 'Sri Sairam Engineering College, India',
            responsibilities: 'As Program Coordinator, Dr. Rukmani Devi manages the technical program, coordinates with track chairs, and ensures smooth execution of all program activities.',
            contact: 'Email: rukmani.cse@sairam.edu.in | LinkedIn: linkedin.com/in/rukmani-devi-r-k-0b845a20/',
            image: 'images/Mukesh K.jpg'
        },
        '6': {
            name: 'Dr. Gunjan Varshney',
            title: 'Co-Chair, YESIST12 2025',
            bio: 'Dr. Gunjan Varshney is an expert in emerging technologies and has led multiple international collaborations. She has published extensively in the field of computer science and engineering. Her research interests include artificial intelligence, machine learning, and their applications in solving real-world problems.',
            affiliation: 'JSS Academy of Technical Education, India',
            responsibilities: 'As Chair of the Innovation Challenge Track, Dr. Varshney leads the evaluation and selection process for innovative projects, coordinates with judges, and ensures high standards for all submissions.',
            contact: 'Email: gunjanvarshney@jssaten.ac.in | LinkedIn: linkedin.com/in/dr-gunjan-varshney-6a881b20/',
            image: 'images/Mukesh K.jpg'
        }
    };

    // --- Modal Logic ---
    const modal = document.getElementById('memberModal');
    const modalClose = document.querySelector('.modal-close');
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');

    // Open modal when More Info button is clicked
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('more-info-btn')) {
            e.stopPropagation(); // Prevent event bubbling
            const card = e.target.closest('.committee-card');
            const memberId = card.getAttribute('data-member-id');
            const member = committeeMembers[memberId];

            if (member) {
                // Populate modal with member data
                const modalImg = document.getElementById('modalMemberImg');
                if (modalImg) modalImg.src = member.image;
                
                const modalName = document.getElementById('modalMemberName');
                if (modalName) modalName.textContent = member.name;
                
                const modalTitle = document.getElementById('modalMemberTitle');
                if (modalTitle) modalTitle.textContent = member.title;
                
                const modalBio = document.getElementById('modalMemberBio');
                if (modalBio) modalBio.textContent = member.bio;
                
                const modalAffiliation = document.getElementById('modalMemberAffiliation');
                if (modalAffiliation) modalAffiliation.textContent = member.affiliation;
                
                const modalResponsibilities = document.getElementById('modalMemberResponsibilities');
                if (modalResponsibilities) modalResponsibilities.textContent = member.responsibilities;
                
                const modalContact = document.getElementById('modalMemberContact');
                if (modalContact) modalContact.textContent = member.contact;

                // Show modal
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                }
            }
        }
    });

    // Close modal when close button is clicked
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // --- Carousel Logic ---
    const track = document.querySelector('.jury-carousel-track');
    if (!track) return;
    let slides = Array.from(track.children);
    const nextButton = document.querySelector('.jury-next');
    const prevButton = document.querySelector('.jury-prev');
    const dotsNav = document.querySelector('.jury-dots');

    function getItemsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    let currentIndex = 0;
    let isAnimating = false;
    let autoplayTimer;

    function buildDots(totalPages) {
        if (!dotsNav) return;
        dotsNav.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = 'jury-dot' + (i === 0 ? ' active' : '');
            dotsNav.appendChild(dot);
        }
    }

    function updateCarousel(immediate) {
        const itemsPerView = getItemsPerView();
        const amountToMove = -(currentIndex * (100 / itemsPerView));
        if (immediate) {
            const prevTransition = track.style.transition;
            track.style.transition = 'none';
            track.style.transform = `translateX(${amountToMove}%)`;
            void track.offsetWidth;
            track.style.transition = prevTransition || '';
        } else {
            track.style.transform = `translateX(${amountToMove}%)`;
        }

        if (dotsNav) {
            const dotEls = Array.from(dotsNav.children);
            const totalRealSlides = slides.length - 2 * getItemsPerView();
            const realIndex = currentIndex - getItemsPerView();
            let pageIndex = Math.floor(realIndex / getItemsPerView());
            if (pageIndex < 0) pageIndex = 0;
            dotEls.forEach(d => d.classList.remove('active'));
            if (dotEls[pageIndex]) dotEls[pageIndex].classList.add('active');
        }
    }

    function setupInfinite() {
        const itemsPerView = getItemsPerView();
        Array.from(track.querySelectorAll('.clone')).forEach(c => c.remove());
        const original = Array.from(track.children).filter(el => !el.classList.contains('clone'));
        for (let i = original.length - itemsPerView; i < original.length; i++) {
            const clone = original[i].cloneNode(true);
            clone.classList.add('clone');
            track.insertBefore(clone, track.firstChild);
        }
        for (let i = 0; i < itemsPerView; i++) {
            const clone = original[i].cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
        }
        slides = Array.from(track.children);
        currentIndex = itemsPerView;
        updateCarousel(true);
        const totalPages = Math.ceil(original.length / itemsPerView);
        buildDots(totalPages);
    }

    function moveNext() {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex++;
        updateCarousel();
    }

    function movePrev() {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex--;
        updateCarousel();
    }

    if (nextButton) nextButton.addEventListener('click', () => { moveNext(); startAutoplay(); });
    if (prevButton) prevButton.addEventListener('click', () => { movePrev(); startAutoplay(); });

    if (dotsNav) {
        dotsNav.addEventListener('click', e => {
            const targetDot = e.target.closest('.jury-dot');
            if (!targetDot) return;
            const itemsPerView = getItemsPerView();
            const dotEls = Array.from(dotsNav.children);
            const targetIndex = dotEls.findIndex(dot => dot === targetDot);
            currentIndex = itemsPerView + targetIndex * itemsPerView;
            updateCarousel();
        });
    }

    track.addEventListener('transitionend', () => {
        const itemsPerView = getItemsPerView();
        const totalRealSlides = slides.length - 2 * itemsPerView;
        if (currentIndex >= totalRealSlides + itemsPerView) {
            currentIndex = itemsPerView;
            updateCarousel(true);
        }
        if (currentIndex <= 0) {
            currentIndex = totalRealSlides;
            updateCarousel(true);
        }
        isAnimating = false;
    });

    function startAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(() => {
            moveNext();
        }, 5000);
    }

    window.addEventListener('resize', () => {
        setupInfinite();
    });

    setupInfinite();
    startAutoplay();
});
