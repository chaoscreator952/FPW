import DataPenerbangan from "./DataPenerbangan"

export default function ListPenerbangan({ props }) {
    return (
        <div className="bg-sky-500 rounded-xl border-4 border-cyan-300">
            <h1 className="text-start font-bold text-2xl ml-5 my-5">List Penerbangan</h1>
            <ul role="list" className="overflow-auto h-screen">
                {props.map((item, index) => {
                    return <DataPenerbangan props={item} key={index}></DataPenerbangan>
                })}
            </ul>
        </div>
    )
}