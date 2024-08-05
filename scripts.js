body {
    font-family: 'Muli', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin-top: 56px;
}

/* Navbar */
.navbar {
    background-color: #333;
}

.navbar-brand, .nav-link {
    color: #e0e0e0 !important;
}

.nav-link:hover {
    color: #c0c0c0 !important;
}

/* Hero Section */
.hero-section {
    background-color: #1e1e1e;
    padding: 80px 0;
    text-align: center;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #555;
    margin-bottom: 20px;
}

.profile-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-text h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero-text p {
    font-size: 1.2rem;
    color: #a0a0a0;
}

/* Social Icons */
.social-icons {
    margin-top: 20px;
}

.social-icons a {
    color: #e0e0e0;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #c0c0c0;
}

/* Sections */
section {
    margin-bottom: 60px;
}

h2 {
    color: #c0c0c0;
    margin-bottom: 20px;
}

/* Projetos Section */
.card {
    background-color: #2a2a2a;
    color: #e0e0e0;
}

.card-title, .card-text {
    color: #e0e0e0;
}

.btn-interactive {
    background-color: #333;
    color: #e0e0e0;
    border: none;
    transition: background-color 0.3s;
}

.btn-interactive:hover {
    background-color: #555;
}

/* Footer */
footer {
    background-color: #1e1e1e;
    padding: 20px 0;
}

footer p {
    margin: 0;
    color: #a0a0a0;
}

/* Carousel Icons */
.icon-white {
    color: #ffffff;
}

/* Footer Icons */
.footer-icon {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    vertical-align: middle;
}

/* Botão de Voltar ao Topo */
.btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
    display: none; /* Ocultar por padrão */
}

.btn-back-to-top:hover {
    background-color: #555;
}

.btn-back-to-top i {
    font-size: 1.2rem;
}

/* Responsividade */
@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 2rem;
    }

    .hero-text p {
        font-size: 1rem;
    }

    .social-icons a {
        font-size: 1.2rem;
    }
}
