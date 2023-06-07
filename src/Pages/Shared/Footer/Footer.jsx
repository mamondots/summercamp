

const Footer = () => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <h2 className="text-3xl font-semibold">Mamon<span>dots</span></h2>
                    <p>MAMONDOTS Industries Ltd.<br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Instructors</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Learing</a>
                    <a className="link link-hover">Trivel</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Learing</a>
                   
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;