// Cybersecurity Portfolio - Dynamic Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeAnimations();
    initializeWriteupSystem();
    initializeNavigation();
    initializeFormHandling();
});

// Animation initialization
function initializeAnimations() {
    // Add fade-in animation to content
    const content = document.getElementById('content');
    if (content) {
        content.classList.add('fade-in');
    }
    
    // Add staggered animations to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-in-left');
        }, index * 100);
    });
    
    // Add hover effects to navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Dynamic writeup system
function initializeWriteupSystem() {
    // This would typically fetch from a server, but for GitHub Pages we'll use a predefined list
    // that can be easily updated when new writeups are added
    const writeups = {
        "Pentester": [
            { title: "Penetration Testing Process", difficulty: "Fundamental", file: "Penetration-Testing-Process.html", category: "fundamentals" },
            { title: "Getting Started", difficulty: "Fundamental", file: "getting-started.html", category: "fundamentals" },
            { title: "Network Enumeration with Nmap", difficulty: "Easy", file: "network-enumeration-with-nmap.html", category: "enumeration" },
            { title: "Footprinting", difficulty: "Medium", file: "footprinting.html", category: "reconnaissance" },
            { title: "Information Gathering - Web Edition", difficulty: "Easy", file: "information-gathering-web-edition.html", category: "web" },
            { title: "Vulnerability Assessment", difficulty: "Easy", file: "vulnerability-assessment.html", category: "assessment" },
            { title: "File Transfers", difficulty: "Medium", file: "file-transfers.html", category: "post-exploitation" },
            { title: "Shells & Payloads", difficulty: "Medium", file: "shells-payloads.html", category: "exploitation" },
            { title: "Using the Metasploit Framework", difficulty: "Easy", file: "using-the-metasploit-framework.html", category: "exploitation" },
            { title: "Password Attacks", difficulty: "Medium", file: "password-attacks.html", category: "attacks" },
            { title: "Attacking Common Services", difficulty: "Medium", file: "attacking-common-services.html", category: "attacks" },
            { title: "Pivoting, Tunneling, and Port Forwarding", difficulty: "Medium", file: "pivoting-tunneling-and-port-forwarding.html", category: "post-exploitation" },
            { title: "Active Directory Enumeration & Attacks", difficulty: "Medium", file: "active-directory-enumeration-attacks.html", category: "windows" },
            { title: "Using Web Proxies", difficulty: "Easy", file: "using-web-proxies.html", category: "web" },
            { title: "Attacking Web Applications with Ffuf", difficulty: "Easy", file: "attacking-web-applications-with-ffuf.html", category: "web" },
            { title: "Login Brute Forcing", difficulty: "Easy", file: "login-brute-forcing.html", category: "attacks" },
            { title: "SQL Injection Fundamentals", difficulty: "Medium", file: "sql-injection-fundamentals.html", category: "web" },
            { title: "SQLMap Essentials", difficulty: "Easy", file: "sqlmap-essentials.html", category: "web" },
            { title: "Cross-Site Scripting (XSS)", difficulty: "Easy", file: "cross-site-scripting-xss.html", category: "web" },
            { title: "File Inclusion", difficulty: "Medium", file: "file-inclusion.html", category: "web" },
            { title: "File Upload Attacks", difficulty: "Medium", file: "file-upload-attacks.html", category: "web" },
            { title: "Command Injections", difficulty: "Medium", file: "command-injections.html", category: "web" },
            { title: "Web Attacks", difficulty: "Medium", file: "web-attacks.html", category: "web" },
            { title: "Attacking Common Applications", difficulty: "Medium", file: "attacking-common-applications.html", category: "attacks" },
            { title: "Linux Privilege Escalation", difficulty: "Easy", file: "linux-privilege-escalation.html", category: "post-exploitation" },
            { title: "Windows Privilege Escalation", difficulty: "Medium", file: "windows-privilege-escalation.html", category: "post-exploitation" },
            { title: "Documentation & Reporting", difficulty: "Easy", file: "documentation-reporting.html", category: "fundamentals" },
            { title: "Attacking Enterprise Networks", difficulty: "Medium", file: "attacking-enterprise-networks.html", category: "enterprise" }
        ],
        "Fortress": [
            // Add Fortress writeups here as they become available
        ],
        "TryHackMe": [
            // Add TryHackMe writeups here as they become available
        ]
    };

    // Populate tables with writeups
    populateWriteupTables(writeups);
    
    // Add search functionality
    addSearchFunctionality(writeups);
    
    // Add filtering by difficulty
    addDifficultyFilter(writeups);
}

function populateWriteupTables(writeups) {
    // Populate HackTheBox Pentester table
    const pentesterTableBody = document.getElementById('htb-pentester-table-body');
    if (pentesterTableBody) {
        populateTable(pentesterTableBody, writeups["Pentester"]);
    }
    
    // Populate Fortress table
    const fortressTableBody = document.getElementById('htb-fortress-table-body');
    if (fortressTableBody) {
        populateTable(fortressTableBody, writeups["Fortress"]);
    }
    
    // Populate TryHackMe table
    const thmTableBody = document.getElementById('thm-table-body');
    if (thmTableBody) {
        populateTable(thmTableBody, writeups["TryHackMe"]);
    }
}

function populateTable(tableBody, writeups) {
    tableBody.innerHTML = '';
    
    writeups.forEach((writeup, index) => {
        const row = tableBody.insertRow();
        row.classList.add('fade-in');
        row.style.animationDelay = `${index * 0.1}s`;
        
        const subjectCell = row.insertCell();
        const difficultyCell = row.insertCell();
        
        // Create link with enhanced styling
        const link = document.createElement('a');
        link.href = `writeups/${writeup.file}`;
        link.textContent = writeup.title;
        link.target = "_blank";
        link.className = 'writeup-link';
        
        // Add category badge
        if (writeup.category) {
            const badge = document.createElement('span');
            badge.className = 'category-badge';
            badge.textContent = writeup.category;
            badge.style.cssText = `
                background: rgba(0, 255, 136, 0.2);
                color: var(--accent-green);
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 0.8em;
                margin-left: 8px;
                border: 1px solid var(--accent-green);
            `;
            link.appendChild(badge);
        }
        
        subjectCell.appendChild(link);
        
        // Add difficulty with color coding
        const difficultySpan = document.createElement('span');
        difficultySpan.textContent = writeup.difficulty;
        difficultySpan.className = 'difficulty-badge';
        
        // Color code difficulty levels
        switch(writeup.difficulty.toLowerCase()) {
            case 'fundamental':
                difficultySpan.style.cssText = 'color: var(--accent-cyan); background: rgba(0, 212, 255, 0.2); padding: 4px 8px; border-radius: 12px; border: 1px solid var(--accent-cyan);';
                break;
            case 'easy':
                difficultySpan.style.cssText = 'color: var(--accent-green); background: rgba(0, 255, 136, 0.2); padding: 4px 8px; border-radius: 12px; border: 1px solid var(--accent-green);';
                break;
            case 'medium':
                difficultySpan.style.cssText = 'color: var(--accent-orange); background: rgba(255, 107, 53, 0.2); padding: 4px 8px; border-radius: 12px; border: 1px solid var(--accent-orange);';
                break;
            case 'hard':
                difficultySpan.style.cssText = 'color: var(--accent-red); background: rgba(255, 51, 102, 0.2); padding: 4px 8px; border-radius: 12px; border: 1px solid var(--accent-red);';
                break;
        }
        
        difficultyCell.appendChild(difficultySpan);
    });
}

function addSearchFunctionality(writeups) {
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        margin: 20px 0;
        text-align: center;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search writeups...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 300px;
        max-width: 100%;
        padding: 12px 20px;
        background: rgba(10, 14, 26, 0.8);
        border: 1px solid var(--border-color);
        border-radius: 25px;
        color: var(--text-primary);
        font-size: 1rem;
        text-align: center;
    `;
    
    searchContainer.appendChild(searchInput);
    
    // Insert search before the first table
    const firstTable = document.querySelector('.portfolio-table');
    if (firstTable) {
        firstTable.parentNode.insertBefore(searchContainer, firstTable);
    }
    
    // Add search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterWriteups(searchTerm, writeups);
    });
}

function filterWriteups(searchTerm, writeups) {
    const tables = document.querySelectorAll('.portfolio-table tbody');
    
    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
                row.classList.add('fade-in');
            } else {
                row.style.display = 'none';
            }
        });
    });
}

function addDifficultyFilter(writeups) {
    // Create difficulty filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'difficulty-filter';
    filterContainer.style.cssText = `
        margin: 20px 0;
        text-align: center;
    `;
    
    const difficulties = ['All', 'Fundamental', 'Easy', 'Medium', 'Hard'];
    difficulties.forEach(difficulty => {
        const button = document.createElement('button');
        button.textContent = difficulty;
        button.className = 'filter-btn';
        button.style.cssText = `
            margin: 0 5px;
            padding: 8px 16px;
            background: rgba(26, 31, 46, 0.8);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        if (difficulty === 'All') {
            button.style.background = 'var(--gradient-accent)';
            button.style.color = 'var(--primary-dark)';
        }
        
        button.addEventListener('click', function() {
            // Reset all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.style.background = 'rgba(26, 31, 46, 0.8)';
                btn.style.color = 'var(--text-secondary)';
            });
            
            // Highlight selected button
            this.style.background = 'var(--gradient-accent)';
            this.style.color = 'var(--primary-dark)';
            
            // Filter tables
            filterByDifficulty(difficulty);
        });
        
        filterContainer.appendChild(button);
    });
    
    // Insert filter before search
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.parentNode.insertBefore(filterContainer, searchContainer);
    }
}

function filterByDifficulty(difficulty) {
    const tables = document.querySelectorAll('.portfolio-table tbody');
    
    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            if (difficulty === 'All') {
                row.style.display = '';
            } else {
                const difficultyCell = row.cells[1];
                if (difficultyCell && difficultyCell.textContent.includes(difficulty)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    });
}

// Navigation functionality
function initializeNavigation() {
    // Add active class to current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Form handling
function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--accent-green)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });
}

// Utility function to add new writeups dynamically
function addWriteup(category, title, difficulty, filename, writeupCategory) {
    // This function can be called to add new writeups to the system
    // It would update the writeups object and re-render the tables
    console.log(`Adding new writeup: ${title} to ${category}`);
}

// Export for potential use in other scripts
window.PortfolioManager = {
    addWriteup: addWriteup,
    filterWriteups: filterWriteups,
    filterByDifficulty: filterByDifficulty
};
