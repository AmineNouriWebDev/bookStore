const HeaderMiddle = ()=>{
    return (
        <div className="header-middle">
        <div className="header-middle-logo">
            <b>Book</b>
            <i className="bi bi-book"></i>
            <b>Store</b>
        </div>
        <div className="header-middle-search-box">
            <input type="search" placeholder="Search in book store..." className="header-middle-search-input" />
            <i className="bi bi-search"></i>
        </div>
        <div className="header-middle-cart-wrapper">
            <i className="bi bi-cart2"></i>
        </div>
    </div>
    );
}
export default HeaderMiddle;