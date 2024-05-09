import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardContainer from "./components/molecules/cards/Cards";
import Filters from "./components/molecules/filters/Filters";
import { fetched } from "./services/jobSlice";
import getData from "./services/api"

export default function JobPage() {

    // Getting the data from store.
    const actualData = useSelector((state) => {
        return state.jobs.jdList;
    });

    // Intializing offset to 0.
    const [offset, setOffset] = useState(0);
    let [filterCompany, setFilterCompany] = useState('Default');
    let [filterJobRole, setFilterJobRole] = useState('Default');
    let [filteredData, setFilteredData] = useState([]);
    const dispatch = useDispatch();

    // fetching next 9 times when ever offset is changed.
    useEffect(() => { fetchData(offset) }, [offset]);

    // function to fetch data and update data in store. 
    // whenever data is updated the useSelector will update the actualData.
    async function fetchData(offset) {
        const result = await getData(offset);
        dispatch(fetched(result.jdList));
    }

    // Event Listener for infinite scroll.
    useEffect(() => {
        setTimeout(() => {
            if (window.innerHeight === document.documentElement.scrollHeight) {
                handleScroll();
            }
        }, 1000)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [filteredData]);

    console.log("window.innerHeight", window.innerHeight);
    console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);
    console.log("document.documentElement.scrollHeight", document.documentElement.scrollHeight);
    //method to handle scroll.
    function handleScroll() {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setOffset((prev) => prev + 10);
                console.log(offset)
            }
        } catch (error) {
            console.log(error)
        }
    }


    // filters
    function handleChange(event) {
        const type = event.target.name;
        const value = event.target.value;

        switch (type) {
            case "Job Role":
                setFilterJobRole(value)
                break;
            case "Company":
                setFilterCompany(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        let FilteredData = actualData.filter((item) => (item.jobRole === filterJobRole || filterJobRole === "Default") &&
            (item.companyName === filterCompany || filterCompany === "Default"));

        setFilteredData(FilteredData)
    }, [filterJobRole, filterCompany, actualData])



    return <>
        <Filters handleChange={handleChange} />
        <CardContainer cardsData={[...filteredData]} />
    </>
}