<?php
// Project data
$projects = [
    [
        'id' => 1,
        'title' => 'Neural Interface',
        'category' => 'ai cybersecurity',
        'image' => 'assets/images/project1.jpg',
        'description' => 'Advanced neural interface system with cybersecurity protocols and AI integration.',
        'technologies' => ['AI', 'Neural Networks', 'Cybersecurity', 'Quantum Encryption'],
        'link' => '#'
    ],
    [
        'id' => 2,
        'title' => 'Quantum Data Vault',
        'category' => 'cybersecurity blockchain',
        'image' => 'assets/images/project2.jpg',
        'description' => 'Secure data storage solution using quantum encryption and blockchain verification.',
        'technologies' => ['Quantum Computing', 'Blockchain', 'Data Security', 'Cloud Infrastructure'],
        'link' => '#'
    ],
    [
        'id' => 3,
        'title' => 'Augmented Reality Hub',
        'category' => 'ar vr',
        'image' => 'assets/images/project3.jpg',
        'description' => 'Immersive AR experience platform for next-generation digital interactions.',
        'technologies' => ['Augmented Reality', 'WebXR', 'Spatial Computing', '3D Modeling'],
        'link' => '#'
    ],
    [
        'id' => 4,
        'title' => 'Synthetic Intelligence',
        'category' => 'ai blockchain',
        'image' => 'assets/images/project4.jpg',
        'description' => 'Decentralized AI system with blockchain-based decision verification.',
        'technologies' => ['Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Smart Contracts'],
        'link' => '#'
    ],
    [
        'id' => 5,
        'title' => 'Cybernetic Interface',
        'category' => 'cybersecurity ai',
        'image' => 'assets/images/project5.jpg',
        'description' => 'Human-machine interface with advanced security and AI assistance.',
        'technologies' => ['Cybernetics', 'Neural Interfaces', 'AI', 'Biometric Security'],
        'link' => '#'
    ],
    [
        'id' => 6,
        'title' => 'Virtual Ecosystem',
        'category' => 'vr ar',
        'image' => 'assets/images/project6.jpg',
        'description' => 'Fully immersive virtual environment with realistic physics and interactions.',
        'technologies' => ['Virtual Reality', 'Physics Simulation', '3D Audio', 'Haptic Feedback'],
        'link' => '#'
    ]
];

// Return projects as JSON if requested via AJAX
if (isset($_GET['ajax'])) {
    header('Content-Type: application/json');
    echo json_encode($projects);
    exit;
}
?>

<?php include 'includes/header.php'; ?>

<section id="projects" class="projects-section">
    <div class="container">
        <div class="section-header">
            <h2 class="neon-text">Our Projects</h2>
            <p>Explore our cutting-edge digital solutions and technological innovations</p>
        </div>
        
        <div class="project-filters">
            <button class="filter-button active" data-filter="all">All</button>
            <button class="filter-button" data-filter="ai">AI</button>
            <button class="filter-button" data-filter="cybersecurity">Cybersecurity</button>
            <button class="filter-button" data-filter="blockchain">Blockchain</button>
            <button class="filter-button" data-filter="ar">AR</button>
            <button class="filter-button" data-filter="vr">VR</button>
        </div>
        
        <div class="projects-grid">
            <?php foreach ($projects as $project): ?>
                <div class="project-card holographic-card" data-category="<?php echo htmlspecialchars($project['category']); ?>">
                    <div class="project-image">
                        <img src="<?php echo htmlspecialchars($project['image']); ?>" alt="<?php echo htmlspecialchars($project['title']); ?>">
                    </div>
                    <div class="project-content">
                        <h3><?php echo htmlspecialchars($project['title']); ?></h3>
                        <p><?php echo htmlspecialchars($project['description']); ?></p>
                        <div class="project-tech">
                            <?php foreach ($project['technologies'] as $tech): ?>
                                <span class="tech-tag"><?php echo htmlspecialchars($tech); ?></span>
                            <?php endforeach; ?>
                        </div>
                        
                        <a href="<?php echo htmlspecialchars($project['link']); ?>" class="cyber-button">View Project</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
