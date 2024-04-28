

export default function Header() {
    return(
        <div className="flex justify-center items-center py-5 px-8 sticky top-0 bg-white shadow-lg md:px-36" style={{zIndex: "99"}}>
            <a href="/" className="w-full flex justify-center md:justify-start">
                <img src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png"
                    alt="" style={{ width: "auto", height: "1.5rem" }} />
            </a>
            <nav className="hidden justify-end space-x-3 md:flex md:w-full">
                <a href="" className="text-xs border-2 border-[#E0E0E0] p-3 rounded line-clamp-1">
                    VI&nbsp;
                    <i className="fa-solid fa-angle-down"></i>
                </a>
                <a href="" className="text-xs border-2 border-[#E0E0E0] p-3 rounded line-clamp-1">Đăng ký/Đăng nhập</a>
                <a href="" className="text-xs border-2 border-[#E0E0E0] p-3 rounded">
                    <i className="fa-solid fa-bag-shopping"></i>
                </a>
            </nav>
        </div>
    )
}