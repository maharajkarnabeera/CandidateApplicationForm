import Dropdown from "../../atoms/dropdown/Dropdown";
import { useSelector } from "react-redux";

export default function Filters({handleChange}) {

    const actualData = useSelector((state) => {
        return state.jobs.jdList;
    })

    const jobRoleOptions = [...new Set(actualData.map((job) => {return job.jobRole}))];
    const companyOptions = [...new Set(actualData.map((job) => {return job.companyName}))];

    return(
        <div className="filters-wrapper">
            <Dropdown name="Job Role" id="job-role" allOptions={jobRoleOptions} changeHandler={handleChange}/>
            <Dropdown name="Company" id="company" allOptions={companyOptions} changeHandler={handleChange}/>
        </div>
    )
}