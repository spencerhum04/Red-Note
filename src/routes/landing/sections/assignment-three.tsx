import { Link } from "react-router-dom";
export default function AssignmentThree() {
    return (
        <div className="w-full flex flex-col text-black px-6 h-40">
            <div className="text-xl font-semibold">Assignment 3</div>
            <div>This is where the assignment contents will go.</div>

            {/* add a button that jump to another page for further on information */}
            <div className="button-container mt-4">
                <div className="button-text mb-2"></div>
                <Link
                    to="A3"
                    className="button-style bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    A3 Detail
                </Link>
            </div>
            
        </div>
        
    )
}