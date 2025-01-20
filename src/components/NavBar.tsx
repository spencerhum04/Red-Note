export default function NavBar() {
    return (
        <div className="w-full flex flex-col justify-center bg-red-200 fixed px-6 h-28">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-2.5">
                    <button className="pr-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="text-red-500 font-bold text-xl">Red Note</div>
                    </button>
                </div>
            </div>
        </div>
    )
}