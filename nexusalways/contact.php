<?php
// Initialize response array
$response = [
    'success' => false,
    'message' => ''
];

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validate form data
    $errors = [];
    
    if (empty($name)) {
        $errors[] = 'Please enter your name';
    }
    
    if (empty($email)) {
        $errors[] = 'Please enter your email';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address';
    }
    
    if (empty($message)) {
        $errors[] = 'Please enter your message';
    }
    
    // If there are no errors, process the form
    if (empty($errors)) {
        // Set email recipient
        $to = 'contact@nexusweb.com'; // Replace with your email address
        
        // Set email subject
        $subject = 'New Contact Form Submission from ' . $name;
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Build email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send email
        $mail_sent = mail($to, $subject, $email_content, $headers);
        
        if ($mail_sent) {
            $response['success'] = true;
            $response['message'] = 'Thank you for your message. We will get back to you soon!';
        } else {
            $response['message'] = 'Sorry, there was an error sending your message. Please try again later.';
        }
    } else {
        // Return validation errors
        $response['message'] = implode('<br>', $errors);
    }
    
    // If this is an AJAX request, return JSON response
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
}
?>

<?php include 'includes/header.php'; ?>

<section id="contact" class="contact-section">
    <div class="container">
        <div class="section-header">
            <h2 class="neon-text">Contact Us</h2>
            <p>Get in touch with our team for inquiries, collaborations, or project discussions</p>
        </div>
        
        <div class="contact-grid">
            <div class="contact-info">
                <div class="holographic-card">
                    <h3><i class="fas fa-map-marker-alt"></i> Location</h3>
                    <p>Cyber District, Neo City<br>Digital Avenue, 10101</p>
                </div>
                
                <div class="holographic-card">
                    <h3><i class="fas fa-envelope"></i> Email</h3>
                    <p><a href="mailto:contact@nexusweb.com">contact@nexusweb.com</a></p>
                </div>
                
                <div class="holographic-card">
                    <h3><i class="fas fa-phone"></i> Phone</h3>
                    <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </div>
                
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            
            <div class="contact-form-container">
                <div class="terminal-container">
                    <div class="terminal-header">
                        <div class="terminal-buttons">
                            <span class="terminal-button"></span>
                            <span class="terminal-button"></span>
                            <span class="terminal-button"></span>
                        </div>
                        <div class="terminal-title">contact_form.exe</div>
                    </div>
                    
                    <div class="terminal-body">
                        <form id="contact-form" method="post" action="contact.php">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                            </div>
                            
                            <div class="form-errors" style="display: none;"></div>
                            
                            <div class="form-success" style="display: none;">
                                Thank you for your message. We will get back to you soon!
                            </div>
                            
                            <button type="submit" class="cyber-button">
                                <span class="glitch-text">Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
