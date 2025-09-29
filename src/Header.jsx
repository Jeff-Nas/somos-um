
export function Header() {
    return (
        <div>
            <div className="flex items-center justify-around bg-gray-950 text-white p-3">
                <h1 className="text-2xl font-montserrat font-bold">Somos Um</h1>
                <img className="w-12" src="ccvideira.png" alt="Logo CCVideira" />
            </div>
            <img src="estudo-profecia.png" alt="banner" />
            <hr className="border-b-1 my-2 border-gray-600"></hr>
        </div>
    )
}