export default function DataPenerbangan({ props }) {
    return (
        <li className="flex justify-between py-5 mx-5 my-3 bg-violet-300 rounded-2xl">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto text-start ml-5">
                    <p className="text-md font-bold">{props.asal.alias}-{props.tujuan.alias}</p>
                    <p className="text-sm font-semibold ">{props.jadwal.berangkat.tanggal}</p>
                    <p className="text-sm font-light">{props.pesawat.maskapai}-{props.pesawat.model}</p>
                </div>
            </div>
            <div className="flex-col">
                {props.jenis == 'internasional' && <button class="bg-blue-500 shadow-lg shadow-blue-500/50 rounded-full px-3 py-1 mx-3 text-sm font-bold uppercase">{props.jenis}</button>}
                {props.jenis == 'domestik' && <button class="bg-green-500 shadow-lg shadow-blue-500/50 rounded-full px-3 py-1 mx-3 text-sm font-bold uppercase">{props.jenis}</button>}
                <p className="text-sm font-bold mt-4 mr-3">Depart on {props.jadwal.durasi}</p>
            </div>
        </li>
    )
}