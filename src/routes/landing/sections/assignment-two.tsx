import { Link } from "react-router-dom";
export default function AssignmentTwo() {
    return (
        <div className="w-full flex flex-col text-black px-6 h-40">
            <div className="text-xl font-semibold">Assignment 1</div>
            <div>This is where the assignment contents will go.</div>

            <div className="mt-4">
                <div className="button-text mb-2"></div>
                <a href="/CISC322_Assignment_2.pdf" target="_blank" rel="noopener noreferrer" className="button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A2 Report</a>
                <a href="/CISC322_A2_Presentation.pdf" target="_blank" rel="noopener noreferrer" className=" ml-4 button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A2 Presentation</a>
                <a href="https://www.youtube.com/watch?v=ps322cRxQbc&ab_channel=Polarisa" target="_blank" rel="noopener noreferrer" className=" ml-4 button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">A2 Video</a>
            </div>
        </div>
    )
}