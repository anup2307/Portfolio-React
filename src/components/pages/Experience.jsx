
export default function Experience() {
  return (
    <div className="bg-[#21325e] text-white  overflow-auto h-screen">
      <div className="flex justify-center items-center flex-col ml-5">
        <div className="max-w-[900px] mt-24">
          <h2 className='text-4xl font-bold underline decoration-pink-600 decoration-4 underline-offset-4'>Past Experiences</h2>
          <div >
            <div className="mb-3 ">
              <h2 className="font-bold mb-2 mt-4 text-2xl">Business Analyst, Cognizant, DesMoines, IOWA (2012-2013)</h2>
              <ul className="list-disc list-inside p-3 ml-6">
                <li>Involved in the creation of Due Diligence Plan and setting up the team</li>
                <li>Responsible for conducting requirement sessions with multiple Stakeholders and gathered feature list as part of due diligence plan</li>
                <li>Created Project plan based on the requirements from due diligence phase, analyzed current functionalities and conducted requirement sessions with multiple stakeholders for detailed requirement gathering, coordinated with offshore in documenting the requirements.</li>
                <li>Conducted review sessions for all the requirement documents with Business users, suggested measures to client in process and system enhancements</li>
              </ul>
            </div>
            <div className="mb-3">
              <h2 className="font-bold mb-2 text-2xl">System analyst , Cognizant, Chennai India (2009-2013)</h2>
              <ul className="list-disc list-inside p-3 ml-6">
                <li>Responsible as subject matter expert of multiple applications,Studied existing systems, understood features, involved in the assessment phase, provided estimates, and responsible for weekly project reports.</li>
                <li>Responsible for understanding functional requirements from business and preparing design documents.</li>
                <li>Involved in end-to-end development, testing of all new applications, also responsible for stabilizing jobs in the production.</li>
              </ul>
            </div>
            <div className="mb-3">
              <h2 className="font-bold mb-2 text-2xl"> Module Lead, HCL, Chennai India (2007-2009)</h2>
              <ul className="list-disc list-inside p-3 ml-6">
                <li>Responsible for understanding the clients existing application and documenting the same.</li>
                <li>Prepared Design and test case documents based on business requirements.</li>
                <li>Involved in coding , testing and implementation and production support.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}