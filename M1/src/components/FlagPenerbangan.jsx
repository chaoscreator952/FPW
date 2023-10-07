import Arrow from '../assets/arrow.svg'
export default function FlagPenerbangan({ props }) {
    return (
        <div className="grid grid-cols-3 bg-blue-300 mx-5 py-5 justify-items-between rounded-xl border-double border-4 border-blue-500">
            <div class="group">
                <img src={`https://flagcdn.com/w80/${props.asal.flag}.png`} class="group-hover:opacity-75 mx-auto my-5" />
                <p class="text-center font-medium">{props.asal.bandara}</p>
            </div>
            <div class="group m-auto">
                <img src={Arrow} class="w-10 group-hover:opacity-75" />
            </div>
            <div class="group" >
                <img src={`https://flagcdn.com/w80/${props.tujuan.flag}.png`} class="group-hover:opacity-75 mx-auto my-5" />
                <p class="text-center font-medium">{props.tujuan.bandara}</p>
            </div>
        </div>
    )
}