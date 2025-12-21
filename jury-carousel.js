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
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.jury-next');
    const prevButton = document.querySelector('.jury-prev');
    const dotsNav = document.querySelector('.jury-dots');
    const dots = Array.from(dotsNav.children);

    // Calculate items per view based on window width
    function getItemsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    let currentSlideIndex = 0;

    function updateCarousel() {
        const itemsPerView = getItemsPerView();
        const slideWidth = 100 / itemsPerView;
        
        // Ensure index is valid
        const maxIndex = Math.ceil(slides.length / itemsPerView) - 1;
        // Logic for sliding one by one:
        // We want to translate by (index * itemWidth)%
        // But we need to make sure we don't scroll past the end.
        // Actually, simpler logic: move by one slide width at a time.
        // The max translation is when the last item is visible.
        
        // Let's use a simpler index logic: index 0 to slides.length - itemsPerView
        const maxScrollIndex = slides.length - itemsPerView;
        if (currentSlideIndex > maxScrollIndex) currentSlideIndex = maxScrollIndex;
        if (currentSlideIndex < 0) currentSlideIndex = 0;

        const amountToMove = -(currentSlideIndex * (100 / itemsPerView));
        track.style.transform = `translateX(${amountToMove}%)`;
        
        // Update dots
        // Map current index to dot index
        // If we have 6 items and view 3, we have 4 possible positions (0,1,2,3) if scrolling 1 by 1.
        // But dots usually represent pages.
        // Let's make dots represent pages.
        const pageIndex = Math.floor(currentSlideIndex / itemsPerView);
        
        dots.forEach(dot => dot.classList.remove('active'));
        // Determine which dot to activate.
        // If we scroll 1 by 1, maybe just highlight the dot corresponding to the group.
        // Let's simplify: 1 dot per item might be too much.
        // 1 dot per page?
        // Let's stick to 1 dot per item for now as per HTML structure I will generate, or update dots logic.
        // Actually, I'll generate dots dynamically in JS to match slides? No, I'll generate them in HTML for now.
        // Let's just highlight the first dot for now if unsure.
        if (dots[currentSlideIndex]) {
            dots[currentSlideIndex].classList.add('active');
        } else if (dots.length > 0) {
            // Fallback
             dots[0].classList.add('active');
        }
    }

    nextButton.addEventListener('click', () => {
        const itemsPerView = getItemsPerView();
        const maxScrollIndex = slides.length - itemsPerView;
        if (currentSlideIndex < maxScrollIndex) {
            currentSlideIndex++;
            updateCarousel();
        } else {
             // Loop back to start
             currentSlideIndex = 0;
             updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        const itemsPerView = getItemsPerView();
        const maxScrollIndex = slides.length - itemsPerView;
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateCarousel();
        } else {
            // Loop to end
            currentSlideIndex = maxScrollIndex;
            updateCarousel();
        }
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('.jury-dot');
        if (!targetDot) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        currentSlideIndex = targetIndex;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    
    // Auto play
    setInterval(() => {
        const itemsPerView = getItemsPerView();
        const maxScrollIndex = slides.length - itemsPerView;
        if (currentSlideIndex < maxScrollIndex) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0;
        }
        updateCarousel();
    }, 5000); // 5 seconds

    // Initial update
    updateCarousel();
});
