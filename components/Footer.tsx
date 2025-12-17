
export default function Footer() {
    return (
        <div className="flex flex-col w-full h-28 md:h-32 justify-center items-center p-10">
            <p className=" text-xs md:text-sm font-medium text-neutral-400">
                Design and Developed by 
                <span className="font-medium text-green-400"> Prathamesh</span>
            </p>
            <p className=" text-[10px] md:text-xs font-medium text-neutral-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    );
}