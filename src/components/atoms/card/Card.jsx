import Button from "../button/Button";
export default function Card(
    { companyName, companyLogo, location, role, minSalary, maxSalary, minExperience, maxExperience, jobDetails }
) {
    return (
        <div className="cmp-card-wrapper">
            <div className="cmp-card-content">
                <div className="cmp-card-company-details">
                    <img className="company-logo" src={companyLogo} alt="company logo" />
                    <div className="info">
                        <h3 className="company-name">{companyName}</h3>
                        <h2 className="job-role">{role}</h2>
                        <p className="job-location">{location}</p>
                    </div>
                </div>
                <p className="cmp-card-salary">Estimated Salary: ${minSalary}K - {maxSalary}K PA ✅</p>
                <div className="cmp-card-job-details">
                    <p>About Company:</p>
                    <p><strong>Job Description</strong></p>
                    <p>{jobDetails}</p>
                </div>
                <div className="cmp-card-experience-details">
                    <h3>experience</h3>
                    <h2>{minExperience} - {maxExperience} years</h2>
                </div>
            </div>
            <div className="cmp-card-buttons-wrapper">
                <Button classname='cmp-btn--easy-apply'
                    text='⚡ Easy Apply' />
                <Button classname='cmp-btn--referrals' text='Unlock referral asks'
                    icons={['https://cdn0.iconfinder.com/data/icons/superuser-web-kit-thin/512/686943-users_people_men_humans_heads_persons-512.png']} />
            </div>
        </div>
    );
}