import React, { useState, useEffect } from "react";
import axios from "axios";

interface Job {
  jobid: number;
  jobtitle: string;
  averagehourlypay: number;
  averageweeklypay: number;
  averageannualpay: number;
  skilllevel: string;
  experiencelevel: string;
  averagehoursperweek?: number;
  totalpositions?: number;
  filledpositions?: number;
  vacantpositions?: number;
}

const JobsBoard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [skillLevel, setSkillLevel] = useState<string>("");
  const [experienceLevel, setExperienceLevel] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const backendOutgoingsEndpoint = `http://localhost:3000/api/jobboard?search=${search}&skillLevel=${skillLevel}&experienceLevel=${experienceLevel}&page=${page}`;

        const response = await axios.get(backendOutgoingsEndpoint, {
          withCredentials: true,
        });
        setJobs(response.data.data as Job[]);
        setTotalPages(response.data.totalPages as number);
        setTotalJobs(response.data.totalJobs as number); // Assuming the API returns totalJobs
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, [search, skillLevel, experienceLevel, page]);

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search job titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded shadow bg-gray-800 text-white"
        />
      </div>

      <div className="flex justify-between items-center my-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (page > 1) setPage(page - 1);
          }}
          className={`text-lg ${
            page === 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-blue-500 hover:text-blue-700"
          }`}
          aria-disabled={page === 1}
        >
          &#8592; {/* Left arrow icon */}
        </a>
        <div className="text-center">
          {/* <p className="text-sm text-gray-400">Total Jobs: {totalJobs}</p> */}
          <p className="font-small">
            {page} / {totalPages}
          </p>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (page < totalPages) setPage(page + 1);
          }}
          className={`text-lg ${
            page === totalPages
              ? "text-gray-500 cursor-not-allowed"
              : "text-blue-500 hover:text-blue-700"
          }`}
          aria-disabled={page === totalPages}
        >
          &#8594; {/* Right arrow icon */}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div
            key={job.jobid}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">{job.jobtitle}</h3>
            <div className="text-sm mb-4">
              <p>
                Average Hourly Pay:{" "}
                <span className="font-semibold">${job.averagehourlypay}</span>
              </p>
              <p>
                Average Weekly Pay:{" "}
                <span className="font-semibold">${job.averageweeklypay}</span>
              </p>
              <p>
                Average Annual Pay:{" "}
                <span className="font-semibold">${job.averageannualpay}</span>
              </p>
              <p>
                Skill Level:{" "}
                <span className="font-semibold">{job.skilllevel}</span>
              </p>
              <p>
                Experience Level:{" "}
                <span className="font-semibold">{job.experiencelevel}</span>
              </p>
            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsBoard;
