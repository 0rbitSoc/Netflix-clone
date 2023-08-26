import Image from "next/image"

const Auth = () => {
    return (
        <div className="
            relative
            h-full
            w-full
            bg-hero
            bg-no-repeat
            bg-center
            bg-cover
            bg-fixed
        ">
            <div className="
                bg-black
                w-full
                h-full
                lg:bg-opacity-50
                sm:bg-opacity-50
            ">
                <nav className="px-12 py-5">
                    <Image src={"/images/logo.png"} alt="logo" width={90} height={60}/>
                </nav>
            </div>
        </div>
    )
}

export default Auth