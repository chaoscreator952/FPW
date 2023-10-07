export default function InfoPenerbangan({ props }) {
    const dateParts = props.jadwal.berangkat.tanggal.split("-")
    const dateTemp = (new Date(dateParts[2], dateParts[1], dateParts[0])).toDateString()
    const date = dateTemp.split(' ')
    return (
        <div className="grid grid-cols-2 text-start bg-red-300 mx-5 my-5 justify-items-between rounded-xl border-dotted border-4 border-red-500">
            <div class="group p-5 font-bold">
                <h1>Boarding Date</h1>
                <h1>Boarding Time</h1>
                <h1>Duration</h1>
                <h1>Flight Type</h1>
            </div>
            <div class="group p-5">
                <h1>{date[2]} {date[1]} {date[3]}</h1>
                <h1>{props.jadwal.berangkat.jam}</h1>
                <h1>{props.jadwal.durasi}</h1>
                <h1 className="uppercase font-medium">{props.jenis}</h1>
            </div>
        </div>
    )
}