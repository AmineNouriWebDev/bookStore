import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-text">Follow us on social media</div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i style={{color:'red'}} className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color:'#2980b9'}} className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color:'red'}} className="bi bi-youtube"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color:'skyblue'}} className="bi bi-twitter"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color:'darkblue'}} className="bi bi-telegram"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-titile">Usefull Links</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">Authors</li>
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Contact Us</li>
                        <li className="footer-link">Register</li>
                    </ul>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-titile">Contact Information</h3>
                    <div className="footer-address-wrapper">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            Tunis - Tunisia - 1001
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill"></i>
                            123-456-789
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill"></i>
                            info@email.com
                        </div>
                    </div>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-titile">About Us</h3>
                    <p className="footer-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem soluta sunt facilis incidunt sint, ea fugit, totam perspiciatis suscipit atque distinctio similique qui velit quis libero fuga. Sint, consectetur dicta.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dicta maiores accusamus facere sit possimus aperiam, eos adipisci magni sed ex nam fuga ducimus architecto nesciunt officiis commodi natus error!
                    </p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
