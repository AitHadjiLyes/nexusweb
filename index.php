<?php
$pageTitle = "NexusWeb - Expériences Digitales Immersives";
$pageDescription = "Créateur d'expériences web immersives et futuristes avec des technologies de pointe.";
$currentPage = "home";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <meta name="description" content="<?php echo $pageDescription; ?>">
    
    <!-- Favicon -->
    <!-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#a855f7">
    <meta name="msapplication-TileColor" content="#a855f7">
    <meta name="theme-color" content="#000000"> -->
    
    <!-- Open Graph / Social Media -->
    <!-- <meta property="og:type" content="website">
    <meta property="og:url" content="https://nexusweb.fr/">
    <meta property="og:title" content="<?php echo $pageTitle; ?>">
    <meta property="og:description" content="<?php echo $pageDescription; ?>">
    <meta property="og:image" content="/assets/images/og-image.jpg">
    <meta property="twitter:card" content="summary_large_image"> -->
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/utilities.css">
    
    <!-- Preload Critical Resources -->
    <!-- <link rel="preload" href="/assets/js/main.js" as="script">
    <link rel="preload" href="/assets/audio/cyberpunk-ambience.mp3" as="audio"> -->
    
    <!-- Structured Data -->
    <!-- <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NexusWeb",
      "url": "https://nexusweb.fr",
      "logo": "https://nexusweb.fr/assets/images/logo.png",
      "sameAs": [
        "https://twitter.com/nexusweb",
        "https://www.instagram.com/nexusweb",
        "https://www.linkedin.com/company/nexusweb",
        "https://github.com/nexusweb"
      ]
    }
    </script> -->
</head>
<body class="loading">
    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen">
        <div class="loading-spinner"></div>
        <div class="loading-text">INITIALIZING NEXUSWEB</div>
        <div class="loading-progress">
            <div class="loading-progress-bar"></div>
        </div>
    </div>

    <!-- Mouse Follower -->
    <div id="mouse-follower" class="mouse-follower"></div>

    <!-- Audio Toggle -->
    <button id="audio-toggle" class="audio-toggle">
        <i class="fas fa-volume-off"></i>
    </button>
    <!-- Audio element with preloaded attribute to prevent automatic loading -->
    <audio id="background-audio" preload="none" loop>
        <source src="assets/audio/cyberpunk-ambience.mp3" type="audio/mp3">
    </audio>

    <!-- Theme Toggle -->
    <button id="theme-toggle" class="theme-toggle">
        <i class="fas fa-moon"></i>
    </button>

    <!-- Language Selector -->
    <!-- <div class="language-selector">
        <button class="language-toggle">
            <i class="fas fa-globe"></i>
            <span>FR</span>
        </button>
        <div class="language-dropdown">
            <a href="#" class="active">Français</a>
            <a href="#">English</a>
            <a href="#">Español</a>
            <a href="#">Deutsch</a>
        </div>
    </div> -->

    <!-- Background Effects -->
    <!-- <div class="background-effects"></div> -->

    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="hero-background"></div>
            <div class="container">
                <div class="hero-content">
                    <h1 class="neon-text">NEXUS<span class="text-gradient">WEB</span></h1>
                    <h2>Expériences Digitales Immersives & Futuristes</h2>
                    <div class="hero-buttons">
                        <a href="#services" class="cyber-button">
                            Découvrir nos services <i class="fas fa-chevron-right"></i>
                        </a>
                        <a href="#contact" class="cyber-button outline">
                            Démarrer un projet
                        </a>
                    </div>
                </div>
                <div class="scroll-indicator">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </section>

        <!-- Featured Projects Slider -->
        <!-- <section class="featured-projects-section">
            <div class="container-fluid">
                <div class="section-header">
                    <div class="section-header-content">
                        <h2 class="glitch-text">PROJETS À LA UNE</h2>
                        <p>Découvrez nos réalisations les plus innovantes et immersives</p>
                    </div>
                    <div class="section-header-actions">
                        <div class="slider-controls">
                            <button class="slider-arrow prev"><i class="fas fa-arrow-left"></i></button>
                            <div class="slider-pagination"></div>
                            <button class="slider-arrow next"><i class="fas fa-arrow-right"></i></button>
                        </div>
                        <a href="/projects.php" class="text-link">
                            Voir tous les projets <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="featured-projects-slider">
                    <div class="swiper-wrapper">
                        
                        <div class="swiper-slide">
                            <div class="featured-project">
                                <div class="project-image">
                                    <img src="/assets/images/projects/project1-large.jpg" alt="NeoVerse - Expérience 3D Interactive">
                                </div>
                                <div class="project-content">
                                    <div class="project-category">Expérience 3D Interactive</div>
                                    <h3 class="project-title">NeoVerse</h3>
                                    <p class="project-description">Plateforme immersive de visualisation de données avec navigation 3D et interactions en temps réel. Une expérience utilisateur révolutionnaire qui transforme la façon dont les utilisateurs interagissent avec des ensembles de données complexes.</p>
                                    <div class="project-meta">
                                        <div class="project-tech">
                                            <span>Three.js</span>
                                            <span>WebGL</span>
                                            <span>React</span>
                                            <span>Node.js</span>
                                        </div>
                                        <a href="/projects/neoverse.php" class="cyber-button small">Voir le projet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="swiper-slide">
                            <div class="featured-project">
                                <div class="project-image">
                                    <img src="/assets/images/projects/project2-large.jpg" alt="Synthwave Portal - Site Web Artistique">
                                </div>
                                <div class="project-content">
                                    <div class="project-category">Site Web Artistique</div>
                                    <h3 class="project-title">Synthwave Portal</h3>
                                    <p class="project-description">Galerie d'art numérique avec effets visuels dynamiques et expérience audio réactive. Une plateforme qui fusionne l'art visuel et l'audio dans une expérience sensorielle complète.</p>
                                    <div class="project-meta">
                                        <div class="project-tech">
                                            <span>GSAP</span>
                                            <span>Canvas</span>
                                            <span>Web Audio API</span>
                                            <span>Vue.js</span>
                                        </div>
                                        <a href="/projects/synthwave-portal.php" class="cyber-button small">Voir le projet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="swiper-slide">
                            <div class="featured-project">
                                <div class="project-image">
                                    <img src="/assets/images/projects/project3-large.jpg" alt="CyberRetail - E-commerce Futuriste">
                                </div>
                                <div class="project-content">
                                    <div class="project-category">E-commerce Futuriste</div>
                                    <h3 class="project-title">CyberRetail</h3>
                                    <p class="project-description">Plateforme de shopping avec essayage virtuel et visualisation 3D des produits. Une révolution dans l'expérience d'achat en ligne qui permet aux clients de visualiser les produits comme jamais auparavant.</p>
                                    <div class="project-meta">
                                        <div class="project-tech">
                                            <span>WebXR</span>
                                            <span>AR.js</span>
                                            <span>Next.js</span>
                                            <span>Shopify</span>
                                        </div>
                                        <a href="/projects/cyber-retail.php" class="cyber-button small">Voir le projet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Services Section -->
        <section id="services" class="services-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">NOS SERVICES</h2>
                    <p>Nous créons des expériences digitales qui transcendent les limites du possible</p>
                </div>

                <div class="services-grid">
                    <?php
                    $services = [
                        [
                            "icon" => "fa-globe",
                            "title" => "Expériences Web Immersives",
                            "description" => "Sites web interactifs avec animations 3D, effets parallaxe et interfaces futuristes qui captent l'attention."
                        ],
                        [
                            "icon" => "fa-code",
                            "title" => "Développement Front-end Avancé",
                            "description" => "Interfaces utilisateur de nouvelle génération avec WebGL, Three.js et les dernières technologies web."
                        ],
                        [
                            "icon" => "fa-microchip",
                            "title" => "Intelligence Artificielle",
                            "description" => "Intégration d'IA conversationnelle, analyse prédictive et systèmes de recommandation personnalisés."
                        ],
                        [
                            "icon" => "fa-database",
                            "title" => "Applications Web Progressives",
                            "description" => "Applications performantes fonctionnant en ligne et hors ligne avec des fonctionnalités natives."
                        ],
                        [
                            "icon" => "fa-layer-group",
                            "title" => "Réalité Augmentée Web",
                            "description" => "Expériences AR accessibles directement depuis le navigateur sans installation d'application."
                        ],
                        [
                            "icon" => "fa-shield-alt",
                            "title" => "Cybersécurité Avancée",
                            "description" => "Protection des données et des applications avec les dernières technologies de sécurité."
                        ]
                    ];

                    foreach ($services as $service) {
                        echo '<div class="holographic-card">';
                        echo '<div class="service-icon"><i class="fas ' . $service["icon"] . '"></i></div>';
                        echo '<h3>' . $service["title"] . '</h3>';
                        echo '<p>' . $service["description"] . '</p>';
                        echo '</div>';
                    }
                    ?>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <!-- <section class="process-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">NOTRE PROCESSUS</h2>
                    <p>Une approche méthodique pour créer des expériences digitales exceptionnelles</p>
                </div>

                <div class="process-timeline">
                    <div class="timeline-item">
                        <div class="timeline-number">01</div>
                        <div class="timeline-content">
                            <h3>Découverte & Stratégie</h3>
                            <p>Nous commençons par comprendre vos objectifs, votre public et vos défis. Cette phase nous permet de définir une stratégie digitale alignée avec vos ambitions.</p>
                            <ul class="timeline-features">
                                <li>Analyse des besoins</li>
                                <li>Étude de marché</li>
                                <li>Définition des objectifs</li>
                                <li>Planification stratégique</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-number">02</div>
                        <div class="timeline-content">
                            <h3>Conception UX/UI</h3>
                            <p>Nous créons des wireframes et des prototypes interactifs qui définissent l'architecture de l'information et l'expérience utilisateur, suivis de designs visuels captivants.</p>
                            <ul class="timeline-features">
                                <li>Wireframing</li>
                                <li>Prototypage</li>
                                <li>Design d'interface</li>
                                <li>Tests utilisateurs</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-number">03</div>
                        <div class="timeline-content">
                            <h3>Développement</h3>
                            <p>Notre équipe de développeurs transforme les designs en code, en utilisant les technologies les plus avancées pour créer des expériences performantes et innovantes.</p>
                            <ul class="timeline-features">
                                <li>Développement front-end</li>
                                <li>Développement back-end</li>
                                <li>Intégration d'API</li>
                                <li>Optimisation des performances</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-number">04</div>
                        <div class="timeline-content">
                            <h3>Tests & Assurance Qualité</h3>
                            <p>Nous testons rigoureusement chaque aspect de votre projet pour garantir une expérience utilisateur impeccable sur tous les appareils et navigateurs.</p>
                            <ul class="timeline-features">
                                <li>Tests fonctionnels</li>
                                <li>Tests de compatibilité</li>
                                <li>Tests de performance</li>
                                <li>Tests de sécurité</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-number">05</div>
                        <div class="timeline-content">
                            <h3>Lancement & Optimisation</h3>
                            <p>Après le lancement, nous continuons à analyser et optimiser votre projet pour améliorer constamment ses performances et son impact.</p>
                            <ul class="timeline-features">
                                <li>Déploiement</li>
                                <li>Analyse des données</li>
                                <li>Optimisation continue</li>
                                <li>Support technique</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Technology Section -->
        <section id="tech" class="tech-section">
            <div class="tech-background"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">TECHNOLOGIES</h2>
                    <p>Notre stack technologique de pointe pour créer des expériences digitales révolutionnaires</p>
                </div>

                <div class="tech-tabs">
                    <div class="tabs-nav">
                        <button class="tab-button active" data-tab="frontend">Front-end</button>
                        <button class="tab-button" data-tab="backend">Back-end</button>
                        <button class="tab-button" data-tab="tools">Outils</button>
                    </div>

                    <div class="tab-content active" id="frontend-tab">
                        <div class="tech-grid">
                            <?php
                            $frontendTech = ["React", "Three.js", "WebGL", "GSAP", "Framer Motion", "Tailwind CSS", "TypeScript", "Next.js"];
                            foreach ($frontendTech as $tech) {
                                echo '<div class="tech-item">' . $tech . '</div>';
                            }
                            ?>
                        </div>
                    </div>

                    <div class="tab-content" id="backend-tab">
                        <div class="tech-grid">
                            <?php
                            $backendTech = ["Node.js", "GraphQL", "MongoDB", "Firebase", "Supabase", "Serverless", "WebSockets", "Redis"];
                            foreach ($backendTech as $tech) {
                                echo '<div class="tech-item">' . $tech . '</div>';
                            }
                            ?>
                        </div>
                    </div>

                    <div class="tab-content" id="tools-tab">
                        <div class="tech-grid">
                            <?php
                            $toolsTech = ["Figma", "Blender", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Analytics"];
                            foreach ($toolsTech as $tech) {
                                echo '<div class="tech-item">' . $tech . '</div>';
                            }
                            ?>
                        </div>
                    </div>
                </div>

                <div class="skills-visualization">
                    <h3>Visualisation des compétences</h3>
                    <div class="skills-container">
                        <?php
                        $skills = [
                            ["name" => "Développement Front-end", "value" => 95],
                            ["name" => "Animations & Effets 3D", "value" => 90],
                            ["name" => "UX/UI Design", "value" => 85],
                            ["name" => "Performance & Optimisation", "value" => 88],
                            ["name" => "Intelligence Artificielle", "value" => 80]
                        ];

                        foreach ($skills as $skill) {
                            echo '<div class="skill-item">';
                            echo '<div class="skill-info">';
                            echo '<span>' . $skill["name"] . '</span>';
                            echo '<span>' . $skill["value"] . '%</span>';
                            echo '</div>';
                            echo '<div class="skill-bar">';
                            echo '<div class="skill-progress" style="width: ' . $skill["value"] . '%"></div>';
                            echo '</div>';
                            echo '</div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- Case Studies Section -->
        <!-- <section class="case-studies-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">ÉTUDES DE CAS</h2>
                    <p>Découvrez comment nous avons relevé des défis complexes pour nos clients</p>
                </div>

                <div class="case-studies-grid">
                    
                    <div class="case-study">
                        <div class="case-study-image">
                            <img src="/assets/images/case-studies/case-study1.jpg" alt="Transformation Digitale pour NeoCorp">
                        </div>
                        <div class="case-study-content">
                            <div class="case-study-category">Transformation Digitale</div>
                            <h3>NeoCorp: Révolution de l'expérience client</h3>
                            <p>Comment nous avons transformé l'expérience client d'une entreprise traditionnelle grâce à une plateforme digitale innovante.</p>
                            <div class="case-study-stats">
                                <div class="stat">
                                    <div class="stat-value">+150%</div>
                                    <div class="stat-label">Engagement</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">-35%</div>
                                    <div class="stat-label">Coûts opérationnels</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">+68%</div>
                                    <div class="stat-label">Conversion</div>
                                </div>
                            </div>
                            <a href="/case-studies/neocorp.php" class="cyber-button small">Lire l'étude de cas</a>
                        </div>
                    </div>

                    
                    <div class="case-study">
                        <div class="case-study-image">
                            <img src="/assets/images/case-studies/case-study2.jpg" alt="Expérience AR pour FutureBrand">
                        </div>
                        <div class="case-study-content">
                            <div class="case-study-category">Réalité Augmentée</div>
                            <h3>FutureBrand: Catalogue produits en AR</h3>
                            <p>Création d'une expérience de catalogue en réalité augmentée qui a révolutionné la façon dont les clients découvrent les produits.</p>
                            <div class="case-study-stats">
                                <div class="stat">
                                    <div class="stat-value">+200%</div>
                                    <div class="stat-label">Temps passé</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">+45%</div>
                                    <div class="stat-label">Taux de conversion</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">-25%</div>
                                    <div class="stat-label">Retours produits</div>
                                </div>
                            </div>
                            <a href="/case-studies/futurebrand.php" class="cyber-button small">Lire l'étude de cas</a>
                        </div>
                    </div>

                    
                    <div class="case-study">
                        <div class="case-study-image">
                            <img src="/assets/images/case-studies/case-study3.jpg" alt="IA pour SynthInc">
                        </div>
                        <div class="case-study-content">
                            <div class="case-study-category">Intelligence Artificielle</div>
                            <h3>SynthInc: Système de recommandation IA</h3>
                            <p>Implémentation d'un système de recommandation basé sur l'IA qui a transformé l'expérience utilisateur et augmenté les revenus.</p>
                            <div class="case-study-stats">
                                <div class="stat">
                                    <div class="stat-value">+85%</div>
                                    <div class="stat-label">Pertinence</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">+120%</div>
                                    <div class="stat-label">Engagement</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">+40%</div>
                                    <div class="stat-label">Revenus</div>
                                </div>
                            </div>
                            <a href="/case-studies/synthinc.php" class="cyber-button small">Lire l'étude de cas</a>
                        </div>
                    </div>
                </div>

                <div class="case-studies-cta">
                    <a href="/case-studies.php" class="cyber-button outline">Voir toutes nos études de cas <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section> -->

        <!-- Testimonials Section -->
        <!-- <section class="testimonials-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">TÉMOIGNAGES</h2>
                    <p>Ce que nos clients disent de notre travail</p>
                </div>

                <div class="testimonials-slider">
                    <div class="swiper-wrapper">
                        
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        <i class="fas fa-quote-left"></i>
                                    </div>
                                    <p>NexusWeb a transformé notre vision en une expérience digitale exceptionnelle. Leur expertise technique et leur créativité ont dépassé toutes nos attentes. Nous avons vu une augmentation significative de l'engagement utilisateur et des conversions depuis le lancement.</p>
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-author">
                                    <div class="author-image">
                                        <img src="/assets/images/testimonials/testimonial1.jpg" alt="Sophie Martin">
                                    </div>
                                    <div class="author-info">
                                        <h4>Sophie Martin</h4>
                                        <p>Directrice Marketing, TechFusion</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        <i class="fas fa-quote-left"></i>
                                    </div>
                                    <p>L'équipe de NexusWeb a été exceptionnelle du début à la fin. Leur approche méthodique et leur attention aux détails ont permis de créer une plateforme qui non seulement répond à nos besoins actuels, mais qui est également prête pour l'avenir.</p>
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-author">
                                    <div class="author-image">
                                        <img src="/assets/images/testimonials/testimonial2.jpg" alt="Alexandre Dubois">
                                    </div>
                                    <div class="author-info">
                                        <h4>Alexandre Dubois</h4>
                                        <p>CEO, InnovateCorp</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="swiper-slide">
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        <i class="fas fa-quote-left"></i>
                                    </div>
                                    <p>La solution AR développée par NexusWeb a complètement transformé notre façon de présenter nos produits. Nos clients peuvent maintenant visualiser nos produits dans leur espace avant d'acheter, ce qui a considérablement réduit les retours et augmenté la satisfaction client.</p>
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                                <div class="testimonial-author">
                                    <div class="author-image">
                                        <img src="/assets/images/testimonials/testimonial3.jpg" alt="Émilie Laurent">
                                    </div>
                                    <div class="author-info">
                                        <h4>Émilie Laurent</h4>
                                        <p>Directrice Produit, DesignElite</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonials-pagination"></div>
                </div>
            </div>
        </section> -->

        <!-- Team Section -->
        <!-- <section class="team-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">NOTRE ÉQUIPE</h2>
                    <p>Des experts passionnés qui donnent vie à vos projets</p>
                </div>

                <div class="team-grid">
                    
                    <div class="team-member">
                        <div class="member-image">
                            <img src="/assets/images/team/team1.jpg" alt="Thomas Mercier">
                            <div class="member-social">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3>Thomas Mercier</h3>
                            <p class="member-role">Fondateur & Directeur Technique</p>
                            <p class="member-bio">Expert en technologies immersives avec plus de 15 ans d'expérience dans le développement web avancé.</p>
                        </div>
                    </div>

                    
                    <div class="team-member">
                        <div class="member-image">
                            <img src="/assets/images/team/team2.jpg" alt="Julie Lefevre">
                            <div class="member-social">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-dribbble"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3>Julie Lefevre</h3>
                            <p class="member-role">Directrice Créative</p>
                            <p class="member-bio">Visionnaire du design avec une passion pour créer des expériences utilisateur innovantes et mémorables.</p>
                        </div>
                    </div>

                    
                    <div class="team-member">
                        <div class="member-image">
                            <img src="/assets/images/team/team3.jpg" alt="Nicolas Roux">
                            <div class="member-social">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fab fa-stack-overflow"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3>Nicolas Roux</h3>
                            <p class="member-role">Lead Développeur Front-end</p>
                            <p class="member-bio">Spécialiste en animations et interactions web avec une expertise en WebGL et Three.js.</p>
                        </div>
                    </div>

                    
                    <div class="team-member">
                        <div class="member-image">
                            <img src="/assets/images/team/team4.jpg" alt="Aurélie Blanc">
                            <div class="member-social">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fab fa-medium"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3>Aurélie Blanc</h3>
                            <p class="member-role">Experte en IA & ML</p>
                            <p class="member-bio">Spécialiste en intelligence artificielle avec une expertise dans l'intégration de solutions IA dans les applications web.</p>
                        </div>
                    </div>
                </div>

                <div class="team-cta">
                    <a href="/team.php" class="cyber-button outline">Rencontrer toute l'équipe <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section> -->

        <!-- Blog Section -->
        <!-- <section class="blog-section">
            <div class="container">
                <div class="section-header">
                    <div class="section-header-content">
                        <h2 class="glitch-text">BLOG & ACTUALITÉS</h2>
                        <p>Insights, tendances et innovations dans le monde digital</p>
                    </div>
                    <a href="/blog.php" class="text-link">
                        Voir tous les articles <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="blog-grid">
                    
                    <div class="blog-post">
                        <div class="post-image">
                            <img src="/assets/images/blog/blog1.jpg" alt="L'avenir du web immersif">
                            <div class="post-category">Tendances</div>
                        </div>
                        <div class="post-content">
                            <div class="post-meta">
                                <span class="post-date">12 Mai 2023</span>
                                <span class="post-author">Par Thomas Mercier</span>
                            </div>
                            <h3 class="post-title">L'avenir du web immersif: au-delà de la 3D</h3>
                            <p class="post-excerpt">Découvrez comment les technologies immersives transforment l'expérience web et ce que cela signifie pour l'avenir du digital.</p>
                            <a href="/blog/avenir-web-immersif.php" class="text-link">Lire l'article <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    
                    <div class="blog-post">
                        <div class="post-image">
                            <img src="/assets/images/blog/blog2.jpg" alt="Intelligence artificielle et UX">
                            <div class="post-category">IA</div>
                        </div>
                        <div class="post-content">
                            <div class="post-meta">
                                <span class="post-date">28 Avril 2023</span>
                                <span class="post-author">Par Aurélie Blanc</span>
                            </div>
                            <h3 class="post-title">Comment l'IA révolutionne l'expérience utilisateur</h3>
                            <p class="post-excerpt">Explorez l'impact de l'intelligence artificielle sur la conception d'expériences utilisateur personnalisées et intuitives.</p>
                            <a href="/blog/ia-experience-utilisateur.php" class="text-link">Lire l'article <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    
                    <div class="blog-post">
                        <div class="post-image">
                            <img src="/assets/images/blog/blog3.jpg" alt="WebGPU et avenir du graphisme web">
                            <div class="post-category">Technologie</div>
                        </div>
                        <div class="post-content">
                            <div class="post-meta">
                                <span class="post-date">15 Avril 2023</span>
                                <span class="post-author">Par Nicolas Roux</span>
                            </div>
                            <h3 class="post-title">WebGPU: l'avenir du graphisme sur le web</h3>
                            <p class="post-excerpt">Plongez dans les capacités de WebGPU et découvrez comment cette technologie va transformer le rendu graphique sur le web.</p>
                            <a href="/blog/webgpu-avenir-graphisme.php" class="text-link">Lire l'article <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="blog-newsletter">
                    <div class="newsletter-content">
                        <h3>Restez informé</h3>
                        <p>Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.</p>
                    </div>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Votre adresse email" required>
                        <button type="submit" class="cyber-button small">S'abonner <i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </section> -->

        <!-- 3D Experience Section -->
        <!-- <section class="experience-section">
            <div class="experience-background"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">EXPÉRIENCE 3D</h2>
                    <p>Explorez notre univers digital en trois dimensions</p>
                </div>

                <div class="experience-container">
                    <div class="experience-loading">
                        <div class="experience-spinner"></div>
                        <p>Chargement de l'expérience 3D...</p>
                    </div>
                </div>

                <div class="experience-info">
                    <p>Nos expériences 3D sont optimisées pour les navigateurs modernes et offrent des performances exceptionnelles sur tous les appareils. Interagissez avec notre univers digital pour découvrir nos capacités en matière de développement 3D.</p>
                    <div class="experience-controls">
                        <button class="cyber-button small" id="rotate-model"><i class="fas fa-sync-alt"></i> Rotation</button>
                        <button class="cyber-button small" id="zoom-model"><i class="fas fa-search-plus"></i> Zoom</button>
                        <button class="cyber-button small" id="reset-model"><i class="fas fa-undo"></i> Réinitialiser</button>
                    </div>
                    <a href="/experiences.php" class="cyber-button">Explorer plus d'expériences <i class="fas fa-vr-cardboard"></i></a>
                </div>
            </div>
        </section> -->

        <!-- Terminal Section -->
        <!-- <section class="terminal-section">
            <div class="container">
                <div class="terminal">
                    <div class="terminal-header">
                        <div class="terminal-buttons">
                            <span class="terminal-button red"></span>
                            <span class="terminal-button yellow"></span>
                            <span class="terminal-button green"></span>
                        </div>
                        <div class="terminal-title">nexusweb-terminal</div>
                    </div>
                    <div class="terminal-content">
                        <div class="terminal-line">> Initializing NexusWeb interface...</div>
                        <div class="terminal-line">> Loading advanced visualization modules...</div>
                        <div class="terminal-line">> Connecting to neural network...</div>
                        <div class="terminal-line">> Establishing secure connection...</div>
                        <div class="terminal-line">> Welcome to NexusWeb. Ready to create the future?</div>
                        <div class="terminal-input">
                            <span class="terminal-prompt">guest@nexusweb:~$</span>
                            <span class="terminal-cursor"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="glitch-text">CONTACT</h2>
                    <p>Prêt à transformer votre vision digitale en réalité ?</p>
                </div>

                <div class="contact-grid">
                    <div class="contact-form">
                        <h3>Envoyez-nous un message</h3>
                        <form action="contact.php" method="POST">
                            <div class="form-group">
                                <label for="name">Nom</label>
                                <input type="text" id="name" name="name" placeholder="Votre nom" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="votre@email.com" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Décrivez votre projet..." required></textarea>
                            </div>
                            <button type="submit" class="cyber-button full-width">Envoyer le message</button>
                        </form>
                    </div>

                    <div class="contact-info">
                        <h3>Informations de contact</h3>
                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-text">
                                    <h4>Email</h4>
                                    <p>contact@nexusweb.fr</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-text">
                                    <h4>Téléphone</h4>
                                    <p>+33 1 23 45 67 89</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-text">
                                    <h4>Adresse</h4>
                                    <p>
                                        42 Avenue du Futur<br>
                                        75001 Paris, France
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="social-links">
                            <h4>Suivez-nous</h4>
                            <div class="social-icons">
                                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                            </div>
                        </div>

                        <div class="hours-card">
                            <h4>Horaires</h4>
                            <p>
                                Lundi - Vendredi: 9h - 18h<br>
                                Weekend: Fermé
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Scroll to top button -->
    <button id="scroll-top" class="scroll-top">
        <i class="fas fa-chevron-up"></i>
    </button>

    <!-- JavaScript -->
    <script src="assets/js/error-handler.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/particles.js"></script>
    <script src="assets/js/cyber-effects.js"></script>
    <script src="assets/js/animations.js"></script>
    <script>
    // Ensure loading screen disappears even if some resources fail to load
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                    document.body.classList.remove('loading');
                }, 1000);
            }
        }, 2500);
        
        // Handle audio toggle safely
        const audioToggle = document.getElementById('audio-toggle');
        const backgroundAudio = document.getElementById('background-audio');
        
        if (audioToggle && backgroundAudio) {
            audioToggle.addEventListener('click', function() {
                try {
                    if (backgroundAudio.paused) {
                        const playPromise = backgroundAudio.play();
                        
                        if (playPromise !== undefined) {
                            playPromise.then(_ => {
                                audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                            })
                            .catch(error => {
                                console.log('Audio playback failed:', error);
                            });
                        }
                    } else {
                        backgroundAudio.pause();
                        audioToggle.innerHTML = '<i class="fas fa-volume-off"></i>';
                    }
                } catch (e) {
                    console.error('Audio error:', e);
                }
            });
        }
    });
    </script>
</body>
</html>
