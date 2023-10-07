export default function VisualPenerbangan({ props }) {
    return (
        <div className="grid grid-cols-2 text-center bg-green-300 mx-5 my-5 rounded-xl border-dashed border-4 border-green-500">
            <div class="group p-5">
                <h1 className="font-bold text-xl">Departure</h1>
                <div className="grid grid-flow-col auto-cols-max">
                    <img src="./src/assets/berangkat.png" />
                    <div className="group">
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <img src="./src/assets/tanggal.png" className="w-12" />
                            <h1 className="text-md mx-3">{props.jadwal.berangkat.tanggal}</h1>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <img src="./src/assets/durasi.png" className="w-12" />
                            <h1 className="text-md mx-3">{props.jadwal.berangkat.jam}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group p-5">
                <h1 className="font-bold text-xl">Arrival</h1>
                <div className="grid grid-flow-col auto-cols-max">
                    <img src="./src/assets/sampai.png" />
                    <div className="group">
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <img src="./src/assets/tanggal.png" className="w-12" />
                            <h1 className="text-md mx-3">{props.jadwal.sampai.tanggal}</h1>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <img src="./src/assets/durasi.png" className="w-12" />
                            <h1 className="text-md mx-3">{props.jadwal.sampai.jam}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}