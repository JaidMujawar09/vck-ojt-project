import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import "../styles/SharedPageLayout.css";
// import "../styles/AdmissionPage.css";

const AdmissionPage = () => {
    return (
        <>
            <div className="header-wrapper">
                <Header />
            </div>

            <div className="main-wrapper">
                <div className="main-box">
                    <div className="main-content-scrollable">
                        <h1 className="main-box-title">Admissions at Vivekanand College</h1>
                        <p>
                            Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible. <br /><br />
                            Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.
                        </p>

                        <h2>Eligibility Criteria for Undergraduate Programs</h2>
                        <hr />
                        <div className="table-container">
                            <table border="2" className="admission-criteria-table" style={{ color: "#333" }}>
                                <thead>
                                    <tr>
                                        <th>Program</th>
                                        <th>Minimum Qualification</th>
                                        <th>Required Subjects</th>
                                        <th>Minimum Marks (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bachelor in Computer Science (B.Sc.)</td>
                                        <td>10+2 (or equivalent)</td>
                                        <td>Physics, Chemistry, Mathematics</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>Bachelor of Commerce <i>(Accounting & Finance)</i> (B.Com)</td>
                                        <td>10+2 (or equivalent)</td>
                                        <td>Commerce Stream</td>
                                        <td>45%</td>
                                    </tr>
                                    <tr>
                                        <td>Bachelor of Arts (B.A)</td>
                                        <td>10+2 (or equivalent)</td>
                                        <td>Any Stream</td>
                                        <td>40%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Application Process</h2>
                        <hr />
                        <p>
                            <b>Step 1 - Online Application:</b> Fill out the application form available on our portal. <br />
                            <b>Step 2 - Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.). <br />
                            <b>Step 3 - Entrance Exam <i>(if applicable):</i></b> Appear for the college's entrance examination.<br />
                            <b>Step 4 - Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted. <br />
                            <b>Step 5 - Fee Payment:</b> Complete the admission by paying the required fees. <br /><br />
                            For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Courses page or contact us directly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    );
};

export default AdmissionPage;