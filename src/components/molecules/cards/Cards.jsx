import Card from "../../atoms/card/Card";

function CardContainer({cardsData}) {

    return (
        <div className="cards-wrapper">
            {cardsData.map((item, index) => {
            return <Card key={index} companyName={item.companyName}
                companyLogo={item.logoUrl}
                location={item.location}
                role={item.jobRole}
                minSalary={item.minJdSalary}
                maxSalary={item.maxJdSalary}
                minExperience={item.minExp}
                maxExperience={item.maxExp}
                jobDetails={item.jobDetailsFromCompany} />})}
        </div>
    );
}

export default CardContainer;