export default function Error({ message }) {
    return (
        <div className="mx-auto py-5">
            <div className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
                <span span className="block text-sm" > {message}</span >
            </div >
        </div >
    );
}
