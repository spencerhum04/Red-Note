export default function AssignmentOne() {
    return (
        <div className="w-full flex flex-col text-black px-6 h-40">
            <div className="text-xl font-semibold">Assignment 1</div>
            <div>This is where the assignment contents will go.</div>

            <div className="mt-4">
                <div className="button-text mb-2"></div>
                <a href="/CISC322_Assignment_1.pdf" target="_blank" rel="noopener noreferrer" className="button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A1 Report</a>
                <a href="/CISC322_A1_Presentation.pdf" target="_blank" rel="noopener noreferrer" className=" ml-4 button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A1 Presentation</a>
                <a href="https://www.youtube.com/watch?v=6bVpLzd3rXA&ab_channel=Polarisa" target="_blank" rel="noopener noreferrer" className=" ml-4 button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A1 Video</a>
            </div>
        </div>
    )
}