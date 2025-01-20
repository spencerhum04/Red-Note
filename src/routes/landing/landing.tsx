import NavBar from "../../components/NavBar";
import AssignmentOne from "./sections/assignment-one";
import AssignmentTwo from "./sections/assignment-two";
import AssignmentThree from "./sections/assignment-three";
import Contacts from "./sections/contacts";

export default function Landing() {
    return (
        <>
            <NavBar />
            <div className="pt-32">
                <AssignmentOne />
                <AssignmentTwo />
                <AssignmentThree />
                <Contacts />
            </div>
        </>
    )
}