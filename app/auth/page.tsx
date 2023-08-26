import Input from "@/components/input"
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
                <div className="flex justify-center">
                    <div
                        className="
                            bg-black
                            bg-opacity-70
                            px-16
                            py-16
                            self-center
                            mt-2
                            lg:w-2/5
                            lg:max-w-md
                            rounded-md
                            w-full
                        "
                    >
                        <h2 className="text-white text-4xl mb-2 font-semibold">
                            Sign In
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth