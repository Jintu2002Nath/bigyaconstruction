document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');

    // Mobile menu functionality
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navList.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (navList.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navList.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Navigation active state
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                navList.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Footer year
    const yearSpan = document.querySelector('.footer-bottom .year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add scroll event listener for header shadow
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});




document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach((slider) => {
        const images = slider.querySelectorAll(".slider-img");
        let currentIndex = 0;

        setInterval(() => {
            // Hide the current image
            images[currentIndex].classList.remove("active");

            // Move to the next image
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].classList.add("active");
        }, 3000); // Change image every 3 seconds
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault();

            // Remove the active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Hide all tab contents
            contents.forEach(content => (content.style.display = 'none'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding tab content
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).style.display = 'block';
        });
    });
});





const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
            
            // If it's a select element and has a selected value, add focus class
            if (input.tagName.toLowerCase() === 'select') {
                input.addEventListener('change', function() {
                    if (this.value) {
                        this.parentNode.classList.add("focus");
                    } else {
                        this.parentNode.classList.remove("focus");
                    }
                });
            }
        });

        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });





// Talk to expert form
// API endpoints
const web3formsURL = 'https://api.web3forms.com/submit';
const googleScriptURL = 'https://script.google.com/macros/s/AKfycbzr04LShMD16Z1dgeWjz0orpVaMA9UOpoLP5xF7nJgUk0R182RHOdlZOjry5boMN2jt/exec';

// Initialize focus handling
function initializeFocusHandling() {
    const inputs = document.querySelectorAll("input, select, textarea");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
        
        if (input.tagName.toLowerCase() === 'select') {
            input.addEventListener('change', function() {
                if (this.value) {
                    this.parentNode.classList.add("focus");
                } else {
                    this.parentNode.classList.remove("focus");
                }
            });
        }
    });
}

function showForm() {
    const overlay = document.getElementById('formOverlay');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    overlay.setAttribute('aria-hidden', 'false');
    
    // Focus trap
    const form = document.querySelector('.expert-form123');
    const focusableElements = form.querySelectorAll('button, input, select, textarea');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    firstElement.focus();

    form.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
        if (e.key === 'Escape') {
            hideForm();
        }
    });
}

function hideForm() {
    const overlay = document.getElementById('formOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('expertForm').reset();
    overlay.setAttribute('aria-hidden', 'true');
    document.querySelector('.talk-expert-btn123').focus();
    
    // Reset loading and success states
    document.getElementById('loadingSpinner').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
    
    // Reset form opacity and pointer events
    const form = document.getElementById('expertForm');
    form.style.opacity = '1';
    form.style.pointerEvents = 'auto';
    form.style.display = 'block';
}

function updateSubServices() {
    const serviceType = document.getElementById('serviceType').value;
    const subServiceSelect = document.getElementById('subService');
    subServiceSelect.innerHTML = '<option value="">Select Sub Service</option>';

    const subServices = {
        building: [
            'Residential Construction',
            'Commercial Construction',
            'Industrial Construction',
            'Interior Work',
            'Exterior Work'
        ],
        testing: [
            'Material Testing',
            'Structural Testing',
            'Geotechnical Testing',
            'Land Survey'
        ],
        academic: [
            'Structural Estimation and BBS Course',
            'Diploma Engineer Course'
        ]
    };

    const materialTestingServices = [
        'Cube Test',
        'Brick Testing',
        'Cement Testing',
        'Concrete Testing',
        'Steel Testing',
        'Bitumen Testing'
    ];

    const structuralTestingServices = [
        'Load Testing',
        'Non-Destructive Testing (NDT)',
        'Deflection Testing',
        'Flexural Testing'
    ];

    const geotechnicalTestingServices = [
        'Standard Penetration Test (SPT)',
        'Cone Penetration Test (CPT)',
        'Pile Load Test (Static Load Test)',
        'Pile Integrity Test (PIT)',
        'Pile Dynamic Analysis (PDA)',
        'Friction Testing (for Bored Piles)',
        'Radial Load Test'
    ];

    const landSurveyServices = [
        'Road Survey',
        'Building Survey',
        'Leveling Survey',
        'Real Estate Projects',
        'Topographical Surveys',
        'Layout Design & Marking'
    ];

    if (serviceType) {
        if (serviceType === 'testing') {
            subServices[serviceType].forEach(service => {
                const option = document.createElement('option');
                option.value = service.toLowerCase().replace(/ /g, '-');
                option.textContent = service;
                option.style.fontWeight = 'bold';
                subServiceSelect.appendChild(option);

                // Add sub-categories based on the main category
                let subCategoryServices;
                if (service === 'Material Testing') {
                    subCategoryServices = materialTestingServices;
                } else if (service === 'Structural Testing') {
                    subCategoryServices = structuralTestingServices;
                } else if (service === 'Geotechnical Testing') {
                    subCategoryServices = geotechnicalTestingServices;
                } else if (service === 'Land Survey') {
                    subCategoryServices = landSurveyServices;
                }

                if (subCategoryServices) {
                    subCategoryServices.forEach(subService => {
                        const subOption = document.createElement('option');
                        subOption.value = subService.toLowerCase().replace(/ /g, '-');
                        subOption.textContent = `  • ${subService}`;
                        subServiceSelect.appendChild(subOption);
                    });
                }
            });
        } else {
            subServices[serviceType].forEach(service => {
                const option = document.createElement('option');
                option.value = service.toLowerCase().replace(/ /g, '-');
                option.textContent = service;
                subServiceSelect.appendChild(option);
            });
        }
    }
}

function validateForm() {
    const form = document.getElementById('expertForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4444';
            showError(input, 'This field is required');
        } else if (input.type === 'email' && input.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ff4444';
                showError(input, 'Please enter a valid email address');
            } else {
                resetError(input);
            }
        } else if (input.type === 'tel' && input.value) {
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(input.value.replace(/\D/g, ''))) {
                isValid = false;
                input.style.borderColor = '#ff4444';
                showError(input, 'Please enter a valid 10-digit phone number');
            } else {
                resetError(input);
            }
        } else {
            resetError(input);
        }
    });

    return isValid;
}

function showError(input, message) {
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '4px';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    errorDiv.textContent = message;
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', `${input.id}-error`);
}

function resetError(input) {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.remove();
    }
    input.style.borderColor = '#ddd';
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
}

function submitForm(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    const form = document.getElementById('expertForm');
  
   
    const loadingSpinner = document.getElementById('loadingSpinner');
    const successMessage = document.getElementById('successMessage');

    // Show loading spinner
    loadingSpinner.style.display = 'block';
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';

    // Prepare form data
    console.log("form", form)
    const formData = new FormData(form);
    console.log('formData',formData )
    // const web3formsURL = 'https://api.web3forms.com/submit';
    // Create an array of fetch promises for simultaneous execution
    const requests = [
        fetch('https://api.web3forms.com/submit', { 
            method: 'POST', 
            body: formData 
        }),
        fetch('https://script.google.com/macros/s/AKfycbzr04LShMD16Z1dgeWjz0orpVaMA9UOpoLP5xF7nJgUk0R182RHOdlZOjry5boMN2jt/exec', { 
            method: 'POST', 
            body: formData 
        })
    ];

    // Execute API calls
    Promise.allSettled(requests)
        .then(results => {
            const web3Response = results[0];
            const googleResponse = results[1];

            // Check success status of each request
            const web3Success = web3Response.status === 'fulfilled' && web3Response.value.ok;
            const googleSuccess = googleResponse.status === 'fulfilled' && googleResponse.value.ok;

            // Handle the response
            loadingSpinner.style.display = 'none';
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.setAttribute('aria-hidden', 'false');

            // Update success message based on API responses
            if (web3Success && googleSuccess) {
                successMessage.textContent = "Thank you! Your request has been successfully submitted.";
            } else if (web3Success || googleSuccess) {
                successMessage.textContent = "Thank you! Your request has been submitted, but there might be a slight delay in processing.";
            } else {
                successMessage.textContent = "There was an issue submitting your request. Please try again later.";
            }

            // Close form after showing success message
            setTimeout(() => {
                hideForm();
            }, 3000);
        })
        .catch(error => {
            console.error('Error during submission:', error);
            loadingSpinner.style.display = 'none';
            form.style.opacity = '1';
            form.style.pointerEvents = 'auto';
            
            // Show error message
            successMessage.style.display = 'block';
            successMessage.style.color = '#ff4444';
            successMessage.textContent = "An error occurred. Please try again later.";
            
            setTimeout(() => {
                successMessage.style.display = 'none';
                successMessage.style.color = '#4CAF50';
            }, 3000);
        });
}

// Add event listeners for input validation on blur
document.addEventListener('DOMContentLoaded', function() {
    // Initialize focus handling
    initializeFocusHandling();

    // Add event listeners for form validation
    document.querySelectorAll('#expertForm input, #expertForm select, #expertForm textarea').forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value) {
                resetError(input);
            }
        });

        input.addEventListener('input', () => {
            if (input.hasAttribute('aria-invalid')) {
                resetError(input);
            }
        });
    });
});



    

// document.addEventListener("DOMContentLoaded", () => {
//     const services = document.querySelectorAll("[data-service]");
//     const popupOverlay = document.getElementById("popupOverlay");
//     const popupClose = document.getElementById("popupClose");
//     const popupTitle = document.getElementById("popupTitle");
//     const popupMessage = document.getElementById("popupMessage");


//     console.log("mnmnnnnnn");

//     // Mapping of testing services to their messages
//     const serviceMessages = {
//         "Cube Test": "The Cube Test is used to measure the compressive strength of concrete samples.",
//         "Brick Testing": "Brick Testing ensures the quality and durability of bricks for construction.",
//         "Cement Testing": "Cement Testing evaluates the setting time, strength, and consistency of cement.",
//         "Concrete Testing": "Concrete Testing determines the performance and durability of concrete structures.",
//         "Steel Testing": "Steel Testing checks the tensile strength, hardness, and elasticity of steel.",
//         "Bitumen Testing": "Bitumen Testing assesses the viscosity, penetration, and softening point of bitumen.",
//         "Load Testing": "Load Testing ensures structural stability under applied loads.",
//         "Non-Destructive Testing": "NDT examines material integrity without causing damage.",
//         "Deflection Testing": "Deflection Testing measures the bending or deformation of structures.",
//         "Flexural Testing": "Flexural Testing evaluates the strength of materials under bending loads."
//     };

//     // Add click event listener to each service
//     services.forEach(service => {
//         service.addEventListener("click", (e) => {
//             const serviceName = e.target.getAttribute("data-service");
//             popupTitle.textContent = serviceName;
//             popupMessage.textContent = serviceMessages[serviceName] || "Details about this service will be shown here.";
//             popupOverlay.style.display = "block";
//         });

//         console.log("ccccccccccc");
//     });

//     console.log(2);

//     // Close popup on close button click
//     popupClose.addEventListener("click", () => {
//         popupOverlay.style.display = "none";
//     });

//     // Close popup when clicking outside the message box
//     popupOverlay.addEventListener("click", (e) => {
//         if (e.target === popupOverlay) {
//             popupOverlay.style.display = "none";
//         }
//     });
// });

// Select elements




// order-form
document.getElementById("integrated-order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    alert("Your order has been successfully placed! We will contact you shortly.");
    this.reset(); // Clear the form fields
});

// function showSubCategory() {
//     // Hide all sub-categories first
//     const subCategories = document.querySelectorAll('.sub-category123');
//     subCategories.forEach(cat => cat.style.display = 'none');
    
//     // Get selected material
//     const material = document.getElementById('material').value;
    
//     // Show relevant sub-category
//     const subCategory = document.getElementById(material + '-sub');
//     if (subCategory) {
//         subCategory.style.display = 'block';
//     }
// }



function showSubCategory() {
    // Hide all sub-categories first
    const subCategories = document.querySelectorAll('.sub-category123');
    subCategories.forEach(cat => {
        cat.style.display = 'none';
        // Disable all inputs in hidden categories
        const inputs = cat.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.disabled = true);
    });
    
    // Get selected material
    const material = document.getElementById('material').value;
    
    // Show and enable relevant sub-category
    const subCategory = document.getElementById(material + '-sub');
    if (subCategory) {
        subCategory.style.display = 'block';
        // Enable inputs in the visible category
        const inputs = subCategory.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.disabled = false);
    }
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initially disable all subcategory inputs
    const subCategories = document.querySelectorAll('.sub-category123');
    subCategories.forEach(cat => {
        const inputs = cat.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.disabled = true);
    });

    // Add form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Create FormData object
        const formData = new FormData(form);
        
        // Add only the basic info and selected material category data
        const finalData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            material: formData.get('material'),
            address: formData.get('address')
        };

        // Add the data from the active subcategory
        const material = formData.get('material');
        switch(material) {
            case 'cement':
                finalData.brand = formData.get('cement-brand');
                finalData.quantity = formData.get('cement-quantity');
                finalData.unit = 'Bags';
                break;
            case 'bar':
                finalData.brand = formData.get('bar-brand');
                finalData.quantity = formData.get('bar-quantity');
                finalData.unit = 'Tons';
                break;
            case 'bricks':
                finalData.type = formData.get('brick-type');
                finalData.quantity = formData.get('brick-quantity');
                finalData.unit = 'Numbers';
                break;
            case 'sand':
                finalData.type = formData.get('sand-type');
                finalData.quantity = formData.get('sand-quantity');
                finalData.unit = 'Cubic Meters';
                break;
            case 'stone':
                finalData.size = formData.get('stone-size');
                finalData.quantity = formData.get('stone-quantity');
                finalData.unit = 'Cubic Meters';
                break;
            case 'tiles':
                finalData.brand = formData.get('tiles-brand');
                finalData.quantity = formData.get('tiles-quantity');
                finalData.unit = 'Boxes';
                break;
            case 'roof':
                finalData.thickness = formData.get('roof-thickness');
                finalData.quantity = formData.get('roof-quantity');
                finalData.unit = 'Square Meters';
                break;
            case 'window':
                finalData.type = formData.get('window-type');
                finalData.quantity = formData.get('window-quantity');
                finalData.unit = 'Units';
                break;
        }

        // Submit the data to the server
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: 'ecc17cfa-3922-4ebf-a33f-3cb1313586b8',
                ...finalData
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                alert('Order submitted successfully!');
                form.reset();
                // Hide all subcategories
                const subCategories = document.querySelectorAll('.sub-category123');
                subCategories.forEach(cat => cat.style.display = 'none');
            } else {
                alert('Error submitting order. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting order. Please try again.');
        });
    });
});





  
 