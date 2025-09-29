
import { SpotifyLogoIcon } from "@phosphor-icons/react"
export function SpotfyButton() {
    return (
        <button className="">
            <a
                href="https://open.spotify.com/playlist/6hrHWGz7Ff06A5AXNpIk66?si=_noBUafuRqyCTSnsKkkmEg&nd=1&dlsi=023a652ccc984bb0"
                className="flex gap-2 items-center bg-green-400 rounded-2xl text-white p-2"
            >
                <SpotifyLogoIcon size={26} />
                <p className="font-semibold">Acessar</p>
            </a>
        </button>
    )
}