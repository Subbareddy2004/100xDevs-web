import { useState } from 'react';
import axios from 'axios';

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const openModal = (courseName : any) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/registrations', {
        email,
        course: selectedCourse
      });
      alert(response.data.message);
      setEmail('');
      closeModal();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const CourseCard = ({ imageSrc, title, buttonText, onClick }: any)  => (
    <div className="border rounded m-8 bg-white">
      <img src={imageSrc} className="w-full border-b rounded-lg w-full md:w-[450px]" alt={title} />
      <div className="flex justify-between p-2">
        <div className="text-xl flex flex-col justify-center">{title}</div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => onClick(title)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <h2 className="text-center bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold mt-12 mb-3">New Courses</h2>
        <div className="flex justify-center flex-wrap">
          <CourseCard
            imageSrc="https://100xdevs.com/_next/image?url=https%3A%2F%2Fappxcontent.kaxa.in%2Fpaid_course3%2F2024-07-06-0.9068764937182356.png&w=750&q=75"
            title="Web Dev Cohort 3.0"
            buttonText="Pre register"
            onClick={openModal}
          />
          
          <CourseCard
            imageSrc="https://100xdevs.com/_next/image?url=https%3A%2F%2Fappxcontent.kaxa.in%2Fpaid_course3%2F2024-07-06-0.8759692953400067.png&w=750&q=75"
            title="Web3 Cohort 1.0"
            buttonText="Pre register"
            onClick={openModal}
          />
        </div>
        <div className="w-max-screen-md px-8">
          <div className="flex justify-center pt-6">
            <div className="text-center bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent text-4xl font-bold mt-5 mb-3 pb-4">Existing Courses</div>
          </div>
          <div className="flex justify-center flex-wrap">
            <CourseCard
              imageSrc="https://100xdevs.com/_next/image?url=https%3A%2F%2Fappx-wsb-gcp.akamai.net.in%2Fpaid_course3%2F2023-11-10-0.3523174787735883.jpeg&w=750&q=75"
              title="Web Dev Cohort 2.0"
              buttonText="Check it out"
              onClick={openModal}
            />
            <CourseCard
              imageSrc="https://100xdevs.com/_next/image?url=https%3A%2F%2Fappx-wsb-gcp.akamai.net.in%2Fteachcode%2Fadmin%2FCOURSE%2Fcover%2F1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg&w=750&q=75"
              title="Web Dev Cohort 1.0"
              buttonText="Check it out"
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre register for {selectedCourse}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}