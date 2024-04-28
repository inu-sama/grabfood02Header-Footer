

export default function Footer() {
    return(
        <div className="bg-[#00B14F] text-white">
            <div className="pt-10 px-8 md:px-36 divide-y space-y-5">
                <img src="https://food.grab.com/static/images/logo-grabfood-white2.svg" alt="" className=""
                    style={{ width: "auto", height: "4rem" }} />
                <div className="grid grid-cols-1 gap-x-10 gap-y-5 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <p className="content-center font-bold">Về GrabFood</p>
                    <p className="content-center font-bold">Mở quán trên GrabFood</p>
                    <p className="content-center font-bold">Trung tâm hỗ trợ</p>
                    <p className="space-x-5">
                        <i className="fa-brands fa-square-facebook text-3xl"></i>
                        <i className="fa-brands fa-instagram text-3xl"></i>
                        <i className="fa-brands fa-square-twitter text-3xl"></i>
                    </p>
                    <p className="content-center font-bold">Về Grab</p>
                    <p className="content-center font-bold">Trở thành tài xế Grab</p>
                    <p className="content-center font-bold">Câu hỏi thường gặp</p>
                    <p></p>
                    <p className="content-center font-bold">Blog</p>
                </div>
                <div className="flex py-6">
                    <div className="hidden w-full lg:flex">
                        <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" style={{height: "3.2rem", width: "auto"}} />
                        <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" style={{height: "3.2rem", width: "auto"}} />
                    </div>
                    <div className="text-left lg:text-right w-full content-center">
                        <p className="text-xs">
                            @ 2024 Grab
                            <a href="" className="ml-8 mr-2">Câu hỏi thường gặp</a>
                            •
                            <a href="" className="ml-2">Chính sách bảo mật</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}