<header id="header" class="site-header">
    <div class="container">
        <div class="header-content">
            <a href="/" class="logo">
                <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-icon">
                    <path d="M60 10L110 60L60 110L10 60L60 10Z" stroke="url(#paint0_linear)" stroke-width="2"/>
                    <path d="M60 30L90 60L60 90L30 60L60 30Z" stroke="url(#paint1_linear)" stroke-width="2"/>
                    <circle cx="60" cy="60" r="10" fill="url(#paint2_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#a855f7"/>
                            <stop offset="1" stop-color="#ec4899"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#a855f7"/>
                            <stop offset="1" stop-color="#ec4899"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="50" y1="50" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#a855f7"/>
                            <stop offset="1" stop-color="#ec4899"/>
                        </linearGradient>
                    </defs>
                </svg>
                NEXUS<span class="text-gradient">WEB</span>
            </a>

            <nav class="main-nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="/" class="nav-link <?php echo $currentPage === 'home' ? 'active' : ''; ?>">Accueil</a>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="/services.php" class="nav-link <?php echo $currentPage === 'services' ? 'active' : ''; ?>">Services</a>
                        <div class="nav-dropdown">
                            <div class="dropdown-grid">
                                <div class="dropdown-column">
                                    <h3>Développement Web</h3>
                                    <ul>
                                        <li><a href="/services/web-immersif.php">Expériences Web Immersives</a></li>
                                        <li><a href="/services/frontend-avance.php">Développement Front-end Avancé</a></li>
                                        <li><a href="/services/pwa.php">Applications Web Progressives</a></li>
                                        <li><a href="/services/cybersecurite.php">Cybersécurité Avancée</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-column">
                                    <h3>Technologies Immersives</h3>
                                    <ul>
                                        <li><a href="/services/realite-augmentee.php">Réalité Augmentée Web</a></li>
                                        <li><a href="/services/realite-virtuelle.php">Expériences VR</a></li>
                                        <li><a href="/services/3d-web.php">3D pour le Web</a></li>
                                        <li><a href="/services/visualisation-donnees.php">Visualisation de Données</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-column">
                                    <h3>Intelligence Artificielle</h3>
                                    <ul>
                                        <li><a href="/services/intelligence-artificielle.php">Solutions IA</a></li>
                                        <li><a href="/services/chatbots.php">Chatbots & Assistants IA</a></li>
                                        <li><a href="/services/recommandation.php">Systèmes de Recommandation</a></li>
                                        <li><a href="/services/analyse-predictive.php">Analyse Prédictive</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-featured">
                                    <div class="featured-service">
                                        <div class="featured-icon"><i class="fas fa-rocket"></i></div>
                                        <h3>Prêt à démarrer?</h3>
                                        <p>Découvrez notre processus de développement et comment nous pouvons vous aider.</p>
                                        <a href="/contact.php" class="cyber-button small">Contactez-nous</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="/projects.php" class="nav-link <?php echo $currentPage === 'projects' ? 'active' : ''; ?>">Projets</a>
                        <div class="nav-dropdown">
                            <div class="dropdown-grid">
                                <div class="dropdown-column">
                                    <h3>Par Catégorie</h3>
                                    <ul>
                                        <li><a href="/projects.php?category=web">Sites Web</a></li>
                                        <li><a href="/projects.php?category=ar">Réalité Augmentée</a></li>
                                        <li><a href="/projects.php?category=vr">Réalité Virtuelle</a></li>
                                        <li><a href="/projects.php?category=ai">Intelligence Artificielle</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-column">
                                    <h3>Par Industrie</h3>
                                    <ul>
                                        <li><a href="/projects.php?industry=tech">Technologie</a></li>
                                        <li><a href="/projects.php?industry=retail">Commerce</a></li>
                                        <li><a href="/projects.php?industry=entertainment">Divertissement</a></li>
                                        <li><a href="/projects.php?industry=education">Éducation</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown-featured">
                                    <div class="featured-project">
                                        <div class="featured-image">
                                            <img src="/assets/images/projects/featured-dropdown.jpg" alt="Projet à la une">
                                        </div>
                                        <h3>Projet à la une</h3>
                                        <p>Découvrez notre dernier projet innovant</p>
                                        <a href="/projects/neoverse.php" class="text-link">Voir le projet <i class="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="/technologies.php" class="nav-link <?php echo $currentPage === 'technologies' ? 'active' : ''; ?>">Technologies</a>
                    </li>
                    <li class="nav-item">
                        <a href="/blog.php" class="nav-link <?php echo $currentPage === 'blog' ? 'active' : ''; ?>">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="/about.php" class="nav-link <?php echo $currentPage === 'about' ? 'active' : ''; ?>">À propos</a>
                    </li>
                    <li class="nav-item">
                        <a href="/contact.php" class="nav-link <?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Contact</a>
                    </li>
                </ul>
                <a href="/contact.php" class="cyber-button small">Démarrer un projet <i class="fas fa-rocket"></i></a>
            </nav>

            <button class="mobile-menu-toggle">
                <span class="toggle-icon"></span>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu">
        <div class="container">
            <div class="mobile-menu-header">
                <a href="/" class="logo">
                    NEXUS<span class="text-gradient">WEB</span>
                </a>
                <button class="mobile-menu-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <ul class="mobile-nav-list">
                <li><a href="/" class="mobile-nav-link <?php echo $currentPage === 'home' ? 'active' : ''; ?>">Accueil</a></li>
                <li class="has-submenu">
                    <a href="#" class="mobile-nav-link">Services <i class="fas fa-chevron-down"></i></a>
                    <ul class="mobile-submenu">
                        <li><a href="/services/web-immersif.php">Expériences Web Immersives</a></li>
                        <li><a href="/services/frontend-avance.php">Développement Front-end Avancé</a></li>
                        <li><a href="/services/intelligence-artificielle.php">Intelligence Artificielle</a></li>
                        <li><a href="/services/pwa.php">Applications Web Progressives</a></li>
                        <li><a href="/services/realite-augmentee.php">Réalité Augmentée Web</a></li>
                        <li><a href="/services/cybersecurite.php">Cybersécurité Avancée</a></li>
                        <li><a href="/services.php">Tous les services</a></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="#" class="mobile-nav-link">Projets <i class="fas fa-chevron-down"></i></a>
                    <ul class="mobile-submenu">
                        <li><a href="/projects.php?category=web">Sites Web</a></li>
                        <li><a href="/projects.php?category=ar">Réalité Augmentée</a></li>
                        <li><a href="/projects.php?category=vr">Réalité Virtuelle</a></li>
                        <li><a href="/projects.php?category=ai">Intelligence Artificielle</a></li>
                        <li><a href="/projects.php">Tous les projets</a></li>
                    </ul>
                </li>
                <li><a href="/technologies.php" class="mobile-nav-link <?php echo $currentPage === 'technologies' ? 'active' : ''; ?>">Technologies</a></li>
                <li><a href="/blog.php" class="mobile-nav-link <?php echo $currentPage === 'blog' ? 'active' : ''; ?>">Blog</a></li>
                <li><a href="/about.php" class="mobile-nav-link <?php echo $currentPage === 'about' ? 'active' : ''; ?>">À propos</a></li>
                <li><a href="/contact.php" class="mobile-nav-link <?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Contact</a></li>
            </ul>
            <div class="mobile-cta">
                <a href="/contact.php" class="cyber-button full-width">Démarrer un projet <i class="fas fa-rocket"></i></a>
            </div>
            <div class="mobile-social">
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</header>
