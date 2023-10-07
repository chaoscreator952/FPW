import FlagPenerbangan from "./FlagPenerbangan"
import InfoPenerbangan from "./InfoPenerbangan"
import VisualPenerbangan from "./VisualPenerbangan"

export default function DetailPenerbangan({ props, rand }) {
    return (
        <div className="bg-yellow-300 rounded-xl border-solid border-4 border-yellow-500">
            <h1 className="text-start font-bold text-2xl ml-5 my-5">{props[rand].pesawat.maskapai} - {props[rand].pesawat.model}</h1>
            <FlagPenerbangan props={props[rand]}></FlagPenerbangan>
            <InfoPenerbangan props={props[rand]}></InfoPenerbangan>
            <VisualPenerbangan props={props[rand]}></VisualPenerbangan>
        </div>
    )
}