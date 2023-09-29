
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
// import Loading from './Loading.js';
import Job from './Job.js';
import Wrapper from '../assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
  return () =>   getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    // return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return(
          <Job key={job._id} {...job} />
      )})}
      </div>
      {page}
    </Wrapper>
  );
};

export default JobsContainer;


