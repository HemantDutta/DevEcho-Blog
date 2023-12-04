export const Footer = () => {
    return(
        <>
            <footer>
                {/* Logo Section */}
                <div className="logo-section">
                    <span>DevEcho</span>
                </div>

                {/* Links Section */}
                <div className="links-section">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>

                {/* Copyright Section */}
                <div className="copyright-section">
                    <p>&copy; 2023 DevEcho. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}